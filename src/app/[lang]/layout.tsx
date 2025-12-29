import * as React from 'react';

import Header from '@/components/header';
import { Locale } from '@/app/i18n';
import Footer from '@/components/footer';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
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
