import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateContact(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/contact.json')).default
      : (await import('@/locales/en/contact.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
