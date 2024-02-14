import type { Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import PartnerWithUs from "@/components/PartnerWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "WE MAKE HIGH QUALITY 3D MODELS FOR YOU",
  description: "Dizipro crafts top-notch 3D models online, powered by our skilled freelance team.",
};

export const viewport: Viewport = {
  width: "1280",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
      </Head>
      <body className="w-full min-h-screen flex flex-col items-center">
        <NextTopLoader />
        <Header />
        {children}
        <PartnerWithUs />
        <Footer />
        <Toaster />
        <Script
          defer
          data-domain="dizipro.org"
          src="https://plausible.io/js/script.js"
        />
        {/* <Script
          defer
          data-domain="fridmo-eight.vercel.app"
          src="https://plausible.io/js/script.js"
        /> */}
      </body>
    </html>
  );
}
