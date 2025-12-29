import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateHome(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/home.json')).default
      : (await import('@/locales/en/home.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
