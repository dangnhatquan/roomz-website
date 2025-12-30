import Link from 'next/link';

import { navigation } from '@/config/navigation';
import { translateCommon } from '@/utils/helpers/i18n/translateCommon';

export default async function NavMenu({ lang }: { lang: 'vi' | 'en' }) {
  const t = await translateCommon(lang);

  return (
    <>
      {navigation
        .filter((item) => !!item.isPublished)
        .map((item) => (
          <nav key={item.key}>
            <Link href={`/${lang}/${item.path}`} className='font-medium'>
              {t(item.labelKey)}
            </Link>
          </nav>
        ))}
    </>
  );
}
