import Link from 'next/link';

import LanguageSwitch from '@/components/header/components/LanguageSwitch';
import MobileMenu from '@/components/header/components/MobileMenu';
import NavMenu from '@/components/header/components/NavMenu';

type Props = {
  lang: 'vi' | 'en';
};

export default function Header({ lang }: Props) {
  return (
    <header className='border-b bg-white'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href={`/${lang}`} className='text-2xl font-serif'>
            RoomZ Logo
          </Link>

          <nav className='hidden lg:flex items-center gap-8'>
            <NavMenu lang={lang} />
          </nav>

          <div className='flex items-center gap-4'>
            <LanguageSwitch lang={lang} />

            <MobileMenu lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
}
