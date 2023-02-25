'use client';

import Button, { ButtonProps } from './Button';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function LocaleSwitcher({ className, ...props }: LocaleSwitcherProps) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <>
      {i18n.locales.map((locale) => {
        return (
          <Button key={locale} href={redirectedPathName(locale)}>
            {locale}
          </Button>
        );
      })}
    </>
  );
}

interface LocaleSwitcherProps extends Pick<ButtonProps, 'className'> {}
