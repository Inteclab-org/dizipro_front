import '../globals.css'
import { GeistSans } from 'geist/font/sans'
import PartnerWithUs from '@/components/PartnerWithUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/toaster'
import { Locale, i18nConfig } from '@/i18n'
import getTranslation from '@/lib/i18n/getTranslation'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
	metadataBase: new URL('https://dizipro.org'),
	title: {
		template: '%s | Dizipro - Professional 3D Modeling',
		default: 'High-Quality 3D Models Crafted by Experts | Dizipro',
	},
	description:
		'Dizipro delivers premium 3D models online, created by our skilled freelance team. Perfect for games, ads, and 3D printing.',
	keywords: '3D models, 3D modeling, freelance 3D, game assets, 3D printing',

	openGraph: {
		type: 'website',
		siteName: 'Dizipro',
		title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
		description: "Get premium 3D models from Dizipro's top freelance creators.",
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Dizipro 3D Models',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'High-Quality 3D Models Crafted by Experts | Dizipro',
		description:
			'Dizipro offers professional 3D modeling services for all your needs.',
		images: ['/og-image.jpg'],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	verification: {
		google: 'i0rnlrNELonBOJ5Oe0yzpmg5QdoDXxnuSabvQ1Z32Ks',
	},

	alternates: {
		canonical: 'https://dizipro.org',
		languages: {
			en: 'https://dizipro.org/en',
			uz: 'https://dizipro.org/uz',
			ru: 'https://dizipro.org/ru',
		},
	},
}

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale: Locale) => ({ locale }))
}

type Props = {
	children: React.ReactNode
	params: { locale: Locale }
}

export default async function RootLayout({ children, params }: Props) {
	const translation = await getTranslation(params.locale)

	return (
		<html lang={params.locale} className={GeistSans.className}>
			<head>
				<link
					href='https://fonts.cdnfonts.com/css/sf-pro-display'
					rel='stylesheet'
				/>
				<link rel='canonical' href={`https://dizipro.org/${params.locale}`} />
				{/* Keywords ni translation orqali emas, to'g'ridan-to'g'ri qo'ying */}
				<meta
					name='keywords'
					content='3d models, 3d modeling, freelance 3d, game assets, 3d printing'
				/>
			</head>

			<GoogleTagManager
				gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || 'GTM-XYZ'}
			/>

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

			<body className='w-full min-h-screen flex flex-col items-center'>
				<NextTopLoader />
				<Header translation={translation} locale={params.locale} />

				<main role='main'>{children}</main>

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
