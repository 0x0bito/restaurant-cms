import { navbarLinks } from "@/constants";
import { getNavbar } from "@/sanity/sanity.query";
import { navbarType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

export default async function Navbar() {
  const data: navbarType = await getNavbar();

  return (
    <>
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={data.logo.url} alt="LOGO" width={35} height={35} />
        </Link>
        <ul className="flex justify-center gap-7 justify-self-start max-md:hidden">
          {navbarLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          {data.socialLinks.map((ele) => (
            <Link key={ele.platform} href={ele.url} className="max-md:hidden">
              <span className="text-base font-medium text-gray-600 capitalize transition hover:text-gray-800">
                {ele.platform}
              </span>
            </Link>
          ))}
        </div>
        <SidebarTrigger className="hidden max-md:block" />
      </nav>
      <Separator className="my-7" />
    </>
  );
}
