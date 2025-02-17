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

const metadataTranslations = {
  en: {
    "title": "WE MAKE HIGH-QUALITY 3D MODELS FOR YOU",
    "description": "Dizipro crafts top-notch 3D models online, powered by our skilled freelance team."
  },
  uz: {
    "title": "SIZ UCHUN YUQORI SIFATDAGI 3D MODELLAR YARATAMIZ",
    "description": "Dizipro tajribali frilanserlar jamoasi yordamida yuqori sifatli 3D modellarni onlayn tarzda yaratadi."
  },
  ru: {
    "title": "МЫ СОЗДАЕМ ДЛЯ ВАС КАЧЕСТВЕННЫЕ 3D МОДЕЛИ",
    "description": "Dizipro создает первоклассные 3D-модели онлайн с помощью нашей опытной команды фрилансеров."
  }
}

let metadata = {
  metadataBase: new URL(defaultUrl),
  title: "WE MAKE HIGH-QUALITY 3D MODELS FOR YOU",
  description: "Dizipro crafts top-notch 3D models online, powered by our skilled freelance team.",
  other: {
    "p:domain_verify": "a90a1f40513d7cb45fce1cf96e039edd"
  }
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

async function RootLayout({ children, params }: Props) {
  const translation = await getTranslation(params.locale);
  metadata.title = translation("metadata.title");
  metadata.description = translation("metadata.description");

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

export default RootLayout;
export {metadata};
