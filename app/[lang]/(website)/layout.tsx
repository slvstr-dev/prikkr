import Button from '@/components/Button';
import Footer from '@/components/Footer';
import LoginButton from '@/components/LoginButton';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';
import { ReactNode } from 'react';

export default async function DashboardLayout({
  children,
  params: { lang }
}: DashboardLayoutProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <header className="m-4 flex gap-4 items-center justify-end flex-wrap">
        <Button href={dictionary.pages.contact.href} intent="secondary">
          {dictionary.pages.contact.title}
        </Button>

        <LoginButton dictionary={dictionary.pages.general.buttons.login} />
      </header>

      <main className="flex-grow">{children}</main>

      {/* @ts-expect-error Server Component */}
      <Footer lang={lang} />
    </>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
  params: { lang: Locale };
}
