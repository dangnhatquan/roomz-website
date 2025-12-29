import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateAboutUs(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/about-us.json')).default
      : (await import('@/locales/en/about-us.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
