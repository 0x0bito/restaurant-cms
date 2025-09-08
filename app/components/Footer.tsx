import { getFooterSocialLinks } from "@/sanity/sanity.query";
import { footerType } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default async function Footer() {
  const data: footerType = await getFooterSocialLinks();

  return (
    <>
      <Separator className="my-7" />
      <footer className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">LOGO</h1>
        <span></span>
        <div className="flex items-center justify-between gap-5">
          {data.socialLinks.map((ele) => (
            <Link href={ele.url} key={ele.url}>
              <span className="text-base font-medium text-gray-600 capitalize transition hover:text-gray-800">
                {ele.platform}
              </span>
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
