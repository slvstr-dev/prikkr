import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  'en-GB': () => import('@/dictionaries/en-GB.json').then((module) => module.default),
  'nl-NL': () => import('@/dictionaries/nl-NL.json').then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
