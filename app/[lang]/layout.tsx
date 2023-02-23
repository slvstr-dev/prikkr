import { ReactNode } from 'react';
import { i18n, Locale } from '@/i18n-config';
import '@/styles/global.css';
import { playfairDisplay, workSans } from './fonts';
import { getDictionary } from '@/utils/get-dictionary';
import Providers from './providers';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={`${playfairDisplay.variable} ${workSans.variable}`}>
      <head>
        <title>{dictionary.general.metadata.title}</title>

        <meta name="description" content={dictionary.general.metadata.description} />
      </head>

      <body className="bg-yellow-50 dark:bg-slate-800 bg:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
