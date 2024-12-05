"use client";
import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
////binaryhoriontal115.woff2  hex115.woff2 binaryvertical115.woff2
import React, { useState } from 'react';
import {
		hin115_font, ing115_font, bangla115_font, telugu115_font,
		mlyalm115_font, tmil115_font, kannada115_font, odia115_font,
		sinhala115_font, pnzabi115_font, guzrati115_font, binaryvertical115_font
} from '@/fonts';
/*
const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: "--font-poppins", });
const rubik = Rubik({ subsets: ["latin"], weight: "600", variable: "--font-rubik", });

export const metadata: Metadata = {
  metadataBase: new URL("https://mdTaquiImam.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "website",
    "@Taquiimam",
    "Taquiimam",
    "taqui developer",
  ],
  authors: [
    {
      name: "Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Taqui imam",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
*/
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  const [selectedFont, setSelectedFont] = useState(ing115_font);
  const handleFontChange = (font: any) => { setSelectedFont(font); };
  const getFontClass = (sval:string) => {
    switch (sval) {
      case '0': return ing115_font ;
      case '1': return hin115_font ;
      case '2': return bangla115_font ;
      case '3': return telugu115_font ;
      case '4': return mlyalm115_font ;
      case '5': return tmil115_font ;      
      case '6': return kannada115_font ;
      case '7': return odia115_font ;
      case '8': return sinhala115_font ;
      case '9': return pnzabi115_font ;
      case 'L': return guzrati115_font ;
      case 'J': return binaryvertical115_font ;
      default: return ing115_font ;
    }
  }
  return (
    <html lang="en">
      <body className={`${selectedFont.className}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
        <div>
          <select onChange={(e) => handleFontChange(getFontClass(e.target.value))}>
            <option value="0">iNg115_font</option>
            <option value="1">hin115_font</option>
            <option value="2">bangla115_font</option>
            <option value="3">telugu115_font</option>
            <option value="4">mlyalm115_font</option>
            <option value="5">tmil115_font</option>
            <option value="6">kannada115_font</option>
            <option value="7">odia115_font</option>
            <option value="8">sinhala115_font</option>
            <option value="9">pnzabi115_font</option>
            <option value="L">guzrati115_font</option>
            <option value="J">binaryvertical115_font</option>
          </select>
        </div>
          {children}
        </main>
      </body>
    </html>
  );
}
