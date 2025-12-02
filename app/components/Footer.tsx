import { getFooterSocialLinks } from "@/sanity/sanity.query";
import { footerType } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";

export default async function Footer() {
  const data: footerType = await getFooterSocialLinks();

  console.log("data.logo: ", data.logo);
  return (
    <>
      <Separator className="my-7" />
      <footer className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={data.logo.url} alt="LOGO" width={35} height={35} />
        </Link>
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
