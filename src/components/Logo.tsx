import Image from 'next/image';
import { cva, VariantProps, cx } from 'class-variance-authority';
import Link, { LinkProps } from './Link';

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <Link href="/" className={cx(logo(), className)} {...props}>
      <Image src="/svg/thumbtack.svg" alt={''} width={24} height={24} />
    </Link>
  );
}

const logo = cva(['grid', 'place-content-center', 'hover:opacity-50', 'transition-opacity']);

export interface LogoProps extends LinkProps, VariantProps<typeof logo> {}
