import Footer from '@/components/Footer';
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
    }
  ];

  return (
    <>
      <div className="flex-grow flex">
        <Sidebar className="w-56" lang={lang} navItems={navItems} />

        <div className="flex-grow p-4">{children}</div>
      </div>

      {/* @ts-expect-error Server Component */}
      <Footer lang={lang} />
    </>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
  params: { lang: Locale };
}
