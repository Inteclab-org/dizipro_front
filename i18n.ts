export const i18nConfig = {
  defaultLocale: 'uz',
  locales: ['en', 'ru', 'uz'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];