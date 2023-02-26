import { cva, VariantProps } from 'class-variance-authority';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export default function Link({ underline, ...props }: LinkProps) {
  if (props.type || props.onClick) return <button {...props} />;

  return <NextLink className={link({ underline })} href={props.href ?? '#'} {...props} />;
}

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  target?: never;
}

export interface BaseLinkProps
  extends Omit<NextLinkProps, 'href'>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  href?: NextLinkProps['href'];
}

const link = cva([], {
  variants: {
    underline: {
      true: 'underline hover:no-underline focus:no-underline',
      false: 'no-underline hover:underline focus:underline'
    }
  },
  defaultVariants: {
    underline: true
  }
});

export type LinkProps = BaseButtonProps & BaseLinkProps & VariantProps<typeof link>;
