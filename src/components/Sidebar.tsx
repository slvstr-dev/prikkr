'use client';

import Link from './Link';

export default function Sidebar({ navItems }: SidebarProps) {
  return (
    <aside className="bg-white p-4 w-1/3 max-w-[200px]">
      <nav className="flex flex-col">
        {navItems.map(({ href, label }, idx) => {
          return (
            <Link key={idx} href={href}>
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

interface SidebarProps {
  navItems: { href: string; label: string }[];
}
