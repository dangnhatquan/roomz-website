export const dynamic = 'force-static';
export const revalidate = false;

import { ContactSection } from '@/app/[lang]/contact/components/contact-section';
import { TLocale } from '@/app/i18n';
import { translateContact } from '@/utils/helpers/i18n/translateContact';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;
  const t = await translateContact(lang);

  return (
    <main className='mx-auto max-w-5xl px-4 py-16'>
      <h1 className='mb-6 text-4xl font-bold'>{t('about.title')}</h1>

      <p className='mb-4 text-lg text-muted-foreground'>
        {t('about.description')}
      </p>

      <ContactSection />
    </main>
  );
}
