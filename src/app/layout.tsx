import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner'
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohit Dudhat",
  description: "Mohit Dudhat Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.10] bg-grid-black/[0.2] relative flex items-center justify-center">
        <AnimatedCursor />
        <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
