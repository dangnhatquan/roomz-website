import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateNews(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/news.json')).default
      : (await import('@/locales/en/news.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
