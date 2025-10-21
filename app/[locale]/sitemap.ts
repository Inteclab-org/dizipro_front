import { MetadataRoute } from 'next'
import { i18nConfig } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://dizipro.org'

	return i18nConfig.locales.map(locale => ({
		url: `${baseUrl}/${locale}`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 1,
		alternates: {
			languages: Object.fromEntries(
				i18nConfig.locales.map(loc => [loc, `${baseUrl}/${loc}`])
			),
		},
	}))
}
