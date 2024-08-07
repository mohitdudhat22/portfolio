import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Toaster } from 'sonner';

import { Navbar } from '@/components/Navbar';
import { AnimatedCursor } from '@/components/AnimatedCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sargam Poudel',
  description: 'A student and backend developer based on Bangalore, India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" dark:bg-black bg-white dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          <Navbar />
          <AnimatedCursor />
          <Toaster />
          {children}
          {/* <SpeedInsights />
          <Analytics /> */}
        </main>
      </body>
    </html>
  );
}