import Image from 'next/image';
import { cva, VariantProps, cx } from 'class-variance-authority';
import Link, { LinkProps } from './Link';

export default function IconButton({
  className,
  intent,
  size,
  fullWidth,
  disabled,
  iconSrc,
  iconAlt,
  iconSize = 16,
  ...props
}: IconButtonProps) {
  return (
    <Link className={iconButton({ intent, size, fullWidth, disabled, className })} {...props}>
      <Image
        src={iconSrc}
        alt={iconAlt ?? ''}
        width={iconSize}
        height={iconSize}
        className={'invert'}
      />
    </Link>
  );
}

const iconButton = cva(
  ['grid', 'place-content-center', 'rounded-full', 'font-semibold', 'transition-colors'],
  {
    variants: {
      intent: {
        primary: ['bg-red-500', 'hover:bg-red-600', 'focus:bg-red-600'],
        secondary: ['bg-white', 'text-gray-800', 'hover:bg-gray-100', 'focus:bg-gray-100']
      },
      size: {
        small: ['text-sm', 'p-2'],
        medium: ['text-base', 'p-4']
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
  }
);

export interface IconButtonProps
  extends Omit<LinkProps, 'disabled'>,
    VariantProps<typeof iconButton> {
  iconSrc: string;
  iconAlt?: string;
  iconSize?: number;
}
