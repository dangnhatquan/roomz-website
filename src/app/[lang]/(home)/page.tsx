export const dynamic = 'force-static';
export const revalidate = false;

import { Locale, locales } from '@/app/i18n';
import { translateHome } from '@/utils/helpers/i18n/translateHome';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;

  const t = await translateHome(lang);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold'>{t('title.home')}</h1>
    </main>
  );
}
