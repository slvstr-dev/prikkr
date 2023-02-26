import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function DashboardPage({ params: { lang } }: DashboardPageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header>
      <h1 className="text-8xl text-red-500 font-bold">{dictionary.pages.dashboard.title}</h1>
    </header>
  );
}

interface DashboardPageProps {
  params: { lang: Locale };
}
