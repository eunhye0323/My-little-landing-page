import en from './en.json';

export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, typeof en> = { en };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[locale];
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      result = translations[defaultLocale];
      for (const fk of keys) {
        if (result && typeof result === 'object' && fk in result) {
          result = result[fk];
        } else {
          return key;
        }
      }
      break;
    }
  }
  return typeof result === 'string' ? result : key;
}

export function useTranslations(locale: Locale) {
  return (key: string) => t(locale, key);
}
