import { locales, TLocale } from '@/app/i18n';
import { translateFindRoom } from '@/utils/helpers/i18n/translateFindRoom';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function FindRoomPage({
  params,
}: {
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;

  const t = await translateFindRoom(lang);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold'>{t('title.find-room')}</h1>
    </main>
  );
}
