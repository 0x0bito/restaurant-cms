import { AppSidebar } from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="hidden max-md:block">
        <AppSidebar />
      </div>
      <div className="mx-auto p-4 max-md:container md:max-w-[90%]">
        <Navbar />
        {children}
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
