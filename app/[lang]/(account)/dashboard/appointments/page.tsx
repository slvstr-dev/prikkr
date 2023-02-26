import { getDictionary } from '@/utils/get-dictionary';
import { Locale } from 'i18n-config';

export default async function AppointmentsPage({ params: { lang } }: AppointmentsPageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header>
      <h1 className=" text-8xl text-red-500 font-bold">{dictionary.pages.appointments.title}</h1>
    </header>
  );
}

interface AppointmentsPageProps {
  params: { lang: Locale };
}
