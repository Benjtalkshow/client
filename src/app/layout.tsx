import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import React from "react";

import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";

const font = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endur | Liquid Staked STRK",
  description:
    "Stake your STRK to support Starknet's decentralization with xSTRK—a liquid staking token (LST) that empowers you to actively engage in DeFi, retain flexibility, and use your xSTRK across various protocols just like STRK. From the buidlers of Karnot and STRKFarm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#F1F7F6]`}>
        <Analytics />
        <Providers>
          <SidebarProvider className="w-full">
            {children}
            <Toaster />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
