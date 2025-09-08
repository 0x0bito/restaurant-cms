import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarHeader>
            <h1 className="text-3xl font-semibold">LOGO</h1>
          </SidebarHeader>
          <SidebarSeparator className="m-auto !my-3.5" />
          <SidebarGroupContent className="mt-7">
            <SidebarMenu className="flex flex-col gap-5">
              {navbarLinks.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild className="p-0">
                    <Link href={item.href} className="p-5 pl-3">
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Link href={"#"} className="w-fit p-5 pl-3">
            <Image
              src={"https://svgl.app/library/instagram.svg"}
              alt="instagram"
              width={20}
              height={20}
            />
          </Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
