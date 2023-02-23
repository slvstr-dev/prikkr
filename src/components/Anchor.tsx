import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export default function Anchor({ className, href, ...props }: AnchorProps) {
  const classNames = clsx('inline-block', className);

  if (href?.startsWith('/')) {
    return <Link href={href} className={classNames} {...props} />;
  }

  if (href?.startsWith('#')) {
    return <a className={classNames} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" className={classNames} {...props} />;
}

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'error';
  size?: 'small' | 'medium' | 'large';
}
