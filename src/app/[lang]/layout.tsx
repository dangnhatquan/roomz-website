import * as React from 'react';

import Header from '@/components/header';
import { TLocale } from '@/app/i18n';
import Footer from '@/components/footer';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer />
    </>
  );
}
