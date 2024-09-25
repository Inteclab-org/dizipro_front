import "../globals.css";
import { GeistSans } from "geist/font/sans";
import PartnerWithUs from "@/components/PartnerWithUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Locale, i18nConfig } from '@/i18n';
import getTranslation from "@/lib/i18n/getTranslation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// export const metadata = {
//   metadataBase: new URL(defaultUrl),
//   // title: "WE MAKE HIGH QUALITY 3D MODELS FOR YOU",
//   // description: "Dizipro crafts top-notch 3D models online, powered by our skilled freelance team.",
//   other: {
//     "p:domain_verify": "a90a1f40513d7cb45fce1cf96e039edd"
//   }
// };

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default async function RootLayout({ children, params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <html lang={params.locale} className={GeistSans.className}>
      <Head>
        <title>{translation("metadata.title")}</title>
        <meta name="description" content={translation("metadata.description")} />
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link rel="alternate" hrefLang="en" href={`${defaultUrl}/en`} />
        <link rel="alternate" hrefLang="uz" href={`${defaultUrl}/uz`} />
        <link rel="alternate" hrefLang="ru" href={`${defaultUrl}/ru`} />
        <meta property="og:title" content={translation("metadata.title")} />
        <meta property="og:description" content={translation("metadata.description")} />
        <meta name="twitter:title" content={translation("metadata.title")} />
        <meta name="twitter:description" content={translation("metadata.description")} />
      </Head>
      <body className="w-full min-h-screen flex flex-col items-center">
        <NextTopLoader />
        <Header translation={translation} locale={params.locale} />
        {children}
        <PartnerWithUs
          title={translation("partner-with-us.title")}
          body={translation("partner-with-us.body")}
          buttonMessage={translation("partner-with-us.start-btn.message")}
          dialog={{
            title: translation("contact-dialog.title"),
            description: translation("contact-dialog.description")
          }}
          locale={params.locale}
        />
        <Footer translation={translation} locale={params.locale} />
        <Toaster />
        <Script
          defer
          data-domain="dizipro.org"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
