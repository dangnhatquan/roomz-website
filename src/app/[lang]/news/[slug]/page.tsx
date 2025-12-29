import { TLocale } from '@/app/i18n';
import { translateNews } from '@/utils/helpers/i18n/translateNews';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ lang: TLocale; slug: string }>;
}) {
  const { lang, slug } = await params;

  const t = await translateNews(lang);

  return (
    <main className='mx-auto max-w-5xl px-4 py-16'>
      <h1 className='mb-6 text-4xl font-bold'>{slug}</h1>

      <p className='mb-4 text-lg text-muted-foreground'>
        {t('about.description')}
      </p>

      <section className='mt-10 grid gap-6 md:grid-cols-2'>
        <div>
          <h2 className='text-xl font-semibold'>{t('about.vision')}</h2>
          <p>{t('about.vision_desc')}</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>{t('about.mission')}</h2>
          <p>{t('about.mission_desc')}</p>
        </div>
      </section>
    </main>
  );
}
