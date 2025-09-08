"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function CategoryBreadCrumb() {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/#categories" className="text-2xl font-semibold text-black">
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-2xl font-semibold text-black">
            {pathname.split("/").pop()}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
