import { getValue } from '@/utils/helpers/i18n/helpers';

export async function translateBranches(lang: 'vi' | 'en') {
  const dict =
    lang === 'vi'
      ? (await import('@/locales/vi/branches.json')).default
      : (await import('@/locales/en/branches.json')).default;

  return (key: string): string => {
    const value = getValue(dict, key);
    return typeof value === 'string' ? value : key;
  };
}
