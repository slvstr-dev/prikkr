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
      className={clsx('w-max rounded-full font-semibold transition-colors', {
        'bg-white text-black hover:bg-black hover:text-white': kind === 'primary',
        'bg-red-500 text-red-50 hover:bg-red-300 hover:text-white': kind === 'error',
        'px-2 py-0.5': size === 'small',
        'px-3 py-1': size === 'medium',
        'px-4 py-1.5': size === 'large'
      })}
      {...props}
    />
  );
};
