import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export default function Link(props: LinkProps) {
  if (props.type || props.onClick) return <button {...props} />;

  return <NextLink href={props.href ?? '#'} {...props} />;
}

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  target?: never;
}

export interface BaseLinkProps
  extends Omit<NextLinkProps, 'href'>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  href?: NextLinkProps['href'];
}

export type LinkProps = BaseButtonProps & BaseLinkProps;
