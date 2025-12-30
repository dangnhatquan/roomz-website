export const dynamic = 'force-static';
export const revalidate = false;

import SearchFilterBar from '@/app/[lang]/(home)/components/search-filter-bar';
import { locales, TLocale } from '@/app/i18n';
import { translateHome } from '@/utils/helpers/i18n/translateHome';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;

  const t = await translateHome(lang);

  return (
    <main className='flex w-screen justify-center min-h-screen h-full'>
      <div className='w-full flex flex-col items-center'>
        <section className='w-full max-h-212.5 h-dvh bg-green-400 flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'>{t('title.home')}</h1>
          <SearchFilterBar />
        </section>

        <section className='min-h-screen'>Danh sách phòng nổi bật</section>
        <section className='min-h-screen'>Chi nhánh nổi bật</section>
        <section className='min-h-screen'>
          Showcase tiệu ích hoặc ưu đãi
        </section>
        <section className='min-h-screen'>Reviews</section>
        <section className='min-h-screen'>
          Banner đăng ký nhận thông tin khách hàng
        </section>
      </div>
    </main>
  );
}
