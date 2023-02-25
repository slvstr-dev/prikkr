import { cva, VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from './Link';

const button = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],

      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    },
    fullWidth: {
      true: ['w-full']
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed']
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      className: 'uppercase'
    }
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

export default function Button({
  className,
  intent,
  size,
  fullWidth,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link className={button({ intent, size, fullWidth, disabled, className })} {...props}>
      {children}
    </Link>
  );
}

export interface ButtonProps extends Omit<LinkProps, 'disabled'>, VariantProps<typeof button> {}
