import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Restaurant CMS",
  description: "Restaurant CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
