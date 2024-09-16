export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'uz'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];