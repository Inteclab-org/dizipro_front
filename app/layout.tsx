import { GeistSans } from "geist/font/sans";
import "./globals.css";
import PartnerWithUs from "@/components/PartnerWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextTopLoader from 'nextjs-toploader';
import Head from "next/head";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
        <script
          defer
          data-domain="dizipro.org"
          src="https://plausible.io/js/script.js"
         />
      </Head>
      <body className="w-full min-h-screen flex flex-col items-center">
        <NextTopLoader />
        <Header />
        {children}
        <PartnerWithUs />
        <Footer/>
      </body>
    </html>
  );
}
