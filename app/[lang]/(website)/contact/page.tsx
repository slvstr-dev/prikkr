import UserInfo from '@/components/UserInfo';
import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function ContactPage({ params: { lang } }: ContactPageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section>
      <h1 className="text-center text-8xl text-red-500 font-bold">
        {dictionary.pages.contact.title}
      </h1>
    </section>
  );
}

interface ContactPageProps {
  params: { lang: Locale };
}
