import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateCommon(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/common.json')).default
      : (await import('@/locales/en/common.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
