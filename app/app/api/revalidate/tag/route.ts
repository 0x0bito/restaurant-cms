import { getCurrentTime } from "@/lib/utils";
import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type WebhookPayload = {
  tags: string[];
};

export async function POST(req: NextRequest) {
  console.log(`[${getCurrentTime()}] [Webhook] Received revalidation request`);

  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      console.error(
        `[${getCurrentTime()}] [Webhook] Missing Environment Variable SANITY_REVALIDATE_SECRET`
      );
      return new Response("Internal Server Error", { status: 500 });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      console.error(`[${getCurrentTime()}] [Webhook] Invalid Secret Key`);
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    } else if (!Array.isArray(body?.tags) || !body.tags.length) {
      console.error(`[${getCurrentTime()}] [Webhook] Bad Request`);
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    console.log(`[${getCurrentTime()}] [Webhook] Received Tags: ${body.tags.join(" ")}`);
    body.tags.forEach((tag) => {
      revalidateTag(tag);
    });
    console.log(
      `[${getCurrentTime()}] [Webhook] Revalidation Completed Successfully for Tags: ${body.tags.join(" ")}`
    );

    return NextResponse.json({ body });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
