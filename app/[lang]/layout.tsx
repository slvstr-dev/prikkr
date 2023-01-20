import { ReactNode } from 'react';
import { i18n } from '@/i18n-config'
import '@/styles/globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{children}</body>
    </html>
  );
} 
