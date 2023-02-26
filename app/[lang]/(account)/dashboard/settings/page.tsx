import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function SettingsPage({ params: { lang } }: SettingsPageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header>
      <h1 className="text-8xl text-red-500 font-bold">{dictionary.pages.settings.title}</h1>
    </header>
  );
}

interface SettingsPageProps {
  params: { lang: Locale };
}
