import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'error';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ kind = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('w-max rounded-full font-bold', {
        'bg-white text-black hover:bg-black hover:text-white transition-colors': kind === 'primary',
        'bg-red-600 text-red-50 hover:bg-red-500 hover:text-white': kind === 'error',
        'px-2 py-0.5': size === 'small',
        'px-3 py-1': size === 'medium',
        'px-4 py-1.5': size === 'large'
      })}
      {...props}
    />
  );
};
