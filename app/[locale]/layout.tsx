import '../globals.css'
import { GeistSans } from 'geist/font/sans'
import PartnerWithUs from '@/components/PartnerWithUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NextTopLoader from 'nextjs-toploader'
import Head from 'next/head'
import Script from 'next/script'
import { Toaster } from '@/components/ui/toaster'
import { Locale, i18nConfig } from '@/i18n'
import getTranslation from '@/lib/i18n/getTranslation'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'

const metadataTranslations = {
	en: {
		title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
		description:
			'Dizipro delivers premium 3D models online, created by our skilled freelance team. Perfect for games, ads, and 3D printing.',
	},
	uz: {
		title: 'SIZ UCHUN YUQORI SIFATDAGI 3D MODELLAR YARATAMIZ | Dizipro',
		description:
			'Dizipro tajribali frilanserlar jamoasi yordamida yuqori sifatli 3D modellarni onlayn tarzda yaratadi.',
	},
	ru: {
		title: 'МЫ СОЗДАЕМ ДЛЯ ВАС КАЧЕСТВЕННЫЕ 3D МОДЕЛИ | Dizipro',
		description:
			'Dizipro создает первоклассные 3D-модели с помощью нашей опытной команды специалистов.',
	},
}

// const defaultUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

// let metadata = {
//   metadataBase: new URL(defaultUrl),
//   title: "WE MAKE HIGH-QUALITY 3D MODELS FOR YOU",
//   description: "Dizipro crafts top-notch 3D models online, powered by our skilled freelance team.",
//   other: {
//     "p:domain_verify": "a90a1f40513d7cb45fce1cf96e039edd"
//   }
// };

let metadata: Metadata = {
	metadataBase: new URL('https://dizipro.org'),
	title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
	description:
		'Dizipro delivers premium 3D models online, created by our skilled freelance team. Perfect for games, ads, and 3D printing.',
	openGraph: {
		title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
		description: "Get premium 3D models from Dizipro's top freelance creators.",
		url: 'https://dizipro.org',
		siteName: 'Dizipro',
		images: [
			{
				url: 'https://dizipro.org/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Dizipro 3D Models',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
		description:
			'Dizipro offers professional 3D modeling services for all your needs.',
		images: ['https://dizipro.org/og-image.jpg'],
	},
	other: {
		'p:domain_verify': 'a90a1f40513d7cb45fce1cf96e039edd',
	},
}

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }))
}

type Props = {
	children: React.ReactNode
	params: {
		locale: Locale
	}
}

async function RootLayout({ children, params }: Props) {
	const translation = await getTranslation(params.locale)
	metadata.title = translation('metadata.title')
	metadata.description = translation('metadata.description')

	return (
		<html lang='en' className={GeistSans.className}>
			<Head>
				<link
					href='https://fonts.cdnfonts.com/css/sf-pro-display'
					rel='stylesheet'
				/>
				<meta
					name='google-site-verification'
					content='i0rnlrNELonBOJ5Oe0yzpmg5QdoDXxnuSabvQ1Z32Ks'
				/>
			</Head>
			<GoogleTagManager
				gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || 'GTM-XYZ'}
			/>
			{/* Google Ads gtag.js (прямой ID для рекламы) */}
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=AW-16922692367'
			/>
			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16922692367');
          `,
				}}
			/>

			<Script
				id='gtag-report-conversion'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16922692367/WBSxCKXfz68aEI-Wr4U_',
                  'value': 1.0,
                  'currency': 'USD',
                  'event_callback': callback
              });
              return false;
            }
          `,
				}}
			/>

			<body className='w-full min-h-screen flex flex-col items-center'>
				<NextTopLoader />
				<Header translation={translation} locale={params.locale} />
				{children}
				<PartnerWithUs
					title={translation('partner-with-us.title')}
					body={translation('partner-with-us.body')}
					buttonMessage={translation('partner-with-us.start-btn.message')}
					dialog={{
						title: translation('contact-dialog.title'),
						description: translation('contact-dialog.description'),
					}}
					locale={params.locale}
				/>
				<Footer translation={translation} locale={params.locale} />
				<Toaster />
				<Script
					defer
					data-domain='dizipro.org'
					src='https://plausible.io/js/script.js'
				/>
			</body>
		</html>
	)
}

export default RootLayout
export { metadata }
