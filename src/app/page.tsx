'use client';
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { IconClipboard } from "@tabler/icons-react";
import Image from "next/image";
import { toast } from 'sonner';
import { ClipboardCopyIcon } from 'lucide-react';
export default function Home() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard",{description:"Make Sure you run it on your terminal <3"});
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <>
      <div
        className="min-h-[60vh] sm:min-h-[80vh] md:min-h-screen w-full flex-col relative flex items-center justify-center"
        id="home"
      >
        <div className="pt-20 select-none">
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-600 to-neutral-800 py-2">
            Hi <span className="wave text-black">👋</span>
          </p>
          <div className="flex items-center gap-5">
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white">
              I&apos;m
            </span>
            <p className="my-6 text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-gray-200 dark:to-blue-500 from-red-600 to-pink-800 py-2 cursor-pointer">
              Mohit Dudhat
            </p>
          </div>
          <button className="inline-flex py-2 px-5 sm:py-4 md:py-6 sm:px-7 md:px-9 animate-shimmer items-center text-2xl justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2 " onClick={() => copyToClipboard("npx mohitdudhat22")}>
            <pre>npx mohitdudhat22</pre> <ClipboardCopyIcon />
            
          </button>
        </div>
      </div>
    </>
  );
}
