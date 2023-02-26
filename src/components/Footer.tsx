import { Locale } from '@/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';
import Link from './Link';

export default async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-11 bg-red-600 text-white text-center grid items-center">
      <Link href={dictionary.components.footer.author.href} underline={false}>
        {currentYear} {dictionary.components.footer.author.label}
      </Link>
    </footer>
  );
}

interface FooterProps {
  lang: Locale;
}
