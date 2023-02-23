import Image from 'next/image';
import clsx from 'clsx';
import Anchor from './Anchor';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export default function IconButton({
  alt,
  src,
  className,
  size = 16,
  variant = 'primary',
  onClick,
  type = 'button',
  href
}: IconButtonProps) {
  const classNames = clsx(
    'group grid place-content-center rounded-full font-semibold transition-colors',
    {
      'bg-white text-black hover:bg-black hover:text-white focus:bg-black focus:text-white outline-transparent':
        variant === 'primary',
      'bg-red-500 text-red-50 focus:bg-red-300 focus:text-white': variant === 'error',
      'h-6 w-6': size === 14,
      'h-8 w-8': size === 16,
      'h-10 w-10': size === 18
    },
    className
  );

  const Icon = (
    <Image
      src={src}
      alt={alt ?? ''}
      width={size}
      height={size}
      className={clsx('group-hover:invert group-focus:invert transition')}
    />
  );

  if (onClick) {
    return (
      <button className={classNames} onClick={onClick} type={type}>
        {Icon}
      </button>
    );
  }

  if (href) {
    return (
      <Anchor className={classNames} href={href}>
        {Icon}
      </Anchor>
    );
  }

  return null;
}

export interface IconButtonProps {
  variant?: 'primary' | 'error';
  size?: 14 | 16 | 18;
  alt?: string;
  src: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  href?: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
  className?: string;
}
