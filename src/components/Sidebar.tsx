'use client';

import { Locale } from '@/i18n-config';
import { cva, cx, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { HTMLAttributes } from 'react';
import Avatar from './UserInfo';
import IconButton from './IconButton';
import Link from './Link';
import LoginButton from './LoginButton';
import Logo from './Logo';

export default function Sidebar({ className, lang, navItems }: SidebarProps) {
  const path = usePathname();

  return (
    <aside className={cx(sidebar(), className)}>
      <Logo className="self-center" />

      <nav className="flex-grow flex flex-col items-start">
        {navItems.map(({ href, label }, idx) => {
          return (
            <Link key={idx} href={href} className="relative">
              {path === `/${lang}${href}` && (
                <motion.span
                  className="absolute left-0 top-full block h-[1px] w-full bg-black"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {label}
            </Link>
          );
        })}
      </nav>

      <Avatar />

      <div className="flex justify-center gap-4">
        <IconButton iconSrc="/svg/gear.svg" href="/dashboard/contact" />

        <LoginButton />
      </div>
    </aside>
  );
}

const sidebar = cva(['flex', 'gap-4', 'flex-col', 'bg-white', 'p-4']);

interface SidebarProps extends HTMLAttributes<'aside'>, VariantProps<typeof sidebar> {
  lang: Locale;
  navItems: { href: string; label: string }[];
}
