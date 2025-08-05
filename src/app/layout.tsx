import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import FullStackLoader from '@/components/UI/FullStackLoader';
import { LoadingProvider } from '@/context/LoadingContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Raphael | Fullstack and mobile developer",
  description: "Fullstack and mobile developer crafting fast, scalable, and modern digital solutions globally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            <FullStackLoader variant="page" message="Loading Portfolio..." />
          </div>
        }>
          {children}
        </Suspense>
         </LoadingProvider>
      </body>
    </html>
  );
}
