'use client';

import clsx from 'clsx';
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
    <ul className={clsx('flex gap-4', className)} {...props}>
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Button href={redirectedPathName(locale)}>{locale}</Button>
          </li>
        );
      })}
    </ul>
  );
}

interface LocaleSwitcherProps extends Pick<ButtonProps, 'className'> {}
