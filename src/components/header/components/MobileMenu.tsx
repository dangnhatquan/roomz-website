'use client';

import { useState } from 'react';

import NavMenu from './NavMenu';

export default function MobileMenu({ lang }: { lang: 'vi' | 'en' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='lg:hidden'>
      <button onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <div className='absolute left-0 top-16 w-full bg-white border-t'>
          <div className='flex flex-col gap-4 p-4'>
            <NavMenu lang={lang} />
          </div>
        </div>
      )}
    </div>
  );
}
