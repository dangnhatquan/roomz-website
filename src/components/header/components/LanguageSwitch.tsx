'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitch({ lang }: { lang: 'vi' | 'en' }) {
  const pathname = usePathname();
  const nextLang = lang === 'vi' ? 'en' : 'vi';

  const nextPath = pathname.replace(`/${lang}`, `/${nextLang}`);

  return (
    <Link href={nextPath} className='flex items-center gap-1 text-sm'>
      🇻🇳 {lang.toUpperCase()}
    </Link>
  );
}
