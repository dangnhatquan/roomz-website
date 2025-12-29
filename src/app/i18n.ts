export const SUPPORTED_LANGUAGES = ['en', 'vi'] as const;

export type TLocale = (typeof SUPPORTED_LANGUAGES)[number];

export const locales: TLocale[] = ['en', 'vi'];
