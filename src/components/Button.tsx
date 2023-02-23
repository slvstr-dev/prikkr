import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Anchor from './Anchor';

export default function Button({
  variant = 'primary',
  size = 16,
  className,
  onClick,
  children,
  href,
  type = 'button'
}: ButtonProps) {
  const classNames = clsx(
    'w-max rounded-full font-medium  transition-colors outline-transparent',
    {
      'bg-white text-black hover:bg-black hover:text-white focus:bg-black focus:text-white':
        variant === 'primary',
      'bg-red-500 text-red-50 hover:bg-red-300 hover:text-white focus:bg-red-300 focus:text-white':
        variant === 'error',
      'px-2 py-0.25 font-sm': size === 14,
      'px-3 py-1 font-base': size === 16,
      'px-4 py-2 font-lg': size === 18
    },
    className
  );

  if (onClick) {
    return (
      <button className={classNames} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Anchor className={classNames} href={href}>
        {children}
      </Anchor>
    );
  }

  return null;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'error';
  size?: 14 | 16 | 18;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  className?: string;
}
