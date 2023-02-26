import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function HomePage({ params: { lang } }: HomePageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="m-4">
      <h1 className="text-center text-8xl text-red-500 font-bold">{dictionary.pages.home.title}</h1>
    </section>
  );
}

interface HomePageProps {
  params: { lang: Locale };
}
