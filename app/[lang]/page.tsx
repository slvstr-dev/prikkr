import { Button } from '@/ui';
import { getDictionary } from 'get-dictionary';
import { Locale } from 'i18n-config';

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="h-screen w-screen grid place-content-center place-items-center">
      <h1 className="text-8xl text-red-500 font-bold mb-8">{dictionary.home.title}</h1>

      <Button kind="error">{dictionary.home.button}</Button>
    </section>
  );
}
