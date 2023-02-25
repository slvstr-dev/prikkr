import { ReactNode } from 'react';
import { i18n, Locale } from '@/i18n-config';
import '@/styles/global.css';
import { playfairDisplay, workSans } from './fonts';
import { getDictionary } from '@/utils/get-dictionary';
import Providers from './providers';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.general.metadata.title,
    description: dictionary.general.metadata.description
  };
}

export default async function Root({ children, params }: RootProps) {
  return (
    <html lang={params.lang} className={`${playfairDisplay.variable} ${workSans.variable}`}>
      <body className="bg-yellow-50 bg:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

interface RootProps {
  children: ReactNode;
  params: { lang: Locale };
}
