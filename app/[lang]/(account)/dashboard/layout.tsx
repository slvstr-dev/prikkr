import Footer from '@/components/Footer';
import LoginButton from '@/components/LoginButton';
import Sidebar from '@/components/Sidebar';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';
import { ReactNode } from 'react';

export default async function DashboardLayout({
  children,
  params: { lang }
}: DashboardLayoutProps) {
  const dictionary = await getDictionary(lang);

  const navItems = [
    {
      href: dictionary.pages.dashboard.href,
      label: dictionary.pages.dashboard.title
    },
    {
      href: dictionary.pages.appointments.href,
      label: dictionary.pages.appointments.title
    },
    {
      href: dictionary.pages.settings.href,
      label: dictionary.pages.settings.title
    }
  ];

  return (
    <>
      <header className="m-4 flex gap-4 items-center justify-end flex-wrap">
        <LoginButton dictionary={dictionary.pages.general.buttons.login} />
      </header>

      <main className="flex-grow flex">
        <Sidebar navItems={navItems} />

        {children}
      </main>

      {/* @ts-expect-error Server Component */}
      <Footer lang={lang} />
    </>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
  params: { lang: Locale };
}
