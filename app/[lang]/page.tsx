import LocaleSwitcher from '@/components/LocaleSwitcher';
import LoginButton from '@/components/LoginButton';
import UserInfo from '@/components/UserInfo';
import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="h-screen w-screen grid place-content-center place-items-center">
      <div className="m-4">
        <h1 className="text-center text-8xl text-red-500 font-bold">{dictionary.home.title}</h1>

        <UserInfo className="mt-8" />

        <div className="mt-4 flex gap-4 items-center justify-center flex-wrap">
          <LoginButton dictionary={dictionary.general.buttons.login} />

          <LocaleSwitcher />
        </div>
      </div>
    </section>
  );
}

interface PageProps {
  params: { lang: Locale };
}
