import LocaleSwitcher from '@/components/LocaleSwitcher';
import LoginButton from '@/components/LoginButton';
import ThemeToggle from '@/components/ThemeToggle';
import UserInfo from '@/components/UserInfo';
import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="h-screen w-screen grid place-content-center place-items-center">
      <h1 className="text-8xl text-red-500 font-bold mb-8">{dictionary.home.title}</h1>

      <UserInfo className="mt-4" />

      <div className="mt-4 flex gap-4 items-center">
        <ThemeToggle />

        <LoginButton dictionary={dictionary.general.buttons.login} />

        <LocaleSwitcher />
      </div>
    </section>
  );
}

interface PageProps {
  params: { lang: Locale };
}
