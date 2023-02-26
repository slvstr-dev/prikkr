import { Locale } from '@/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';
import { cva, VariantProps } from 'class-variance-authority';
import Link from './Link';

export default async function Footer({ lang }: FooterProps) {
  const dictionary = await getDictionary(lang);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer()}>
      <Link href={dictionary.components.footer.author.href} underline={false}>
        &copy;{currentYear} {dictionary.components.footer.author.label}
      </Link>
    </footer>
  );
}

const footer = cva(['h-11', 'bg-red-600', 'text-white', 'grid', 'place-content-center']);

interface FooterProps extends VariantProps<typeof footer> {
  lang: Locale;
}
