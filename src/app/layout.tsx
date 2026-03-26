import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grandeour - AI-Powered Marketing Operations Platform",
  description: "Streamline your marketing workflows, automate content creation, and drive growth with AI-powered intelligence. Everything you need to scale your marketing.",
  keywords: ["Marketing", "AI", "Automation", "Content Calendar", "Campaign Management", "Marketing Operations"],
  authors: [{ name: "Grandeour Team" }],
  icons: {
    icon: "/my_logo.png",
  },
  openGraph: {
    title: "Grandeour - AI-Powered Marketing Operations",
    description: "Your entire marketing operations orchestrated with AI",
    url: "https://grandeour.com",
    siteName: "Grandeour",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grandeour - AI-Powered Marketing Operations",
    description: "Your entire marketing operations orchestrated with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
