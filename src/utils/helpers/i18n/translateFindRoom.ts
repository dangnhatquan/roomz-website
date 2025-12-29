import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateFindRoom(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/find-room.json')).default
      : (await import('@/locales/en/find-room.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
