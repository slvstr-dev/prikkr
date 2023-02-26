import UserInfo from '@/components/UserInfo';
import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function SettingsPage({ params: { lang } }: SettingsPageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section>
      <h1 className="text-center text-8xl text-red-500 font-bold">
        {dictionary.pages.settings.title}
      </h1>

      <UserInfo className="mt-8" />
    </section>
  );
}

interface SettingsPageProps {
  params: { lang: Locale };
}
