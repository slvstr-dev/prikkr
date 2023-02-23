export const i18n = {
  defaultLocale: 'en-GB',
  locales: ['en-GB', 'nl-NL']
} as const;

export type Locale = (typeof i18n)['locales'][number];
