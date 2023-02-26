'use client';

import Image, { ImageProps } from 'next/image';
import { useSession } from 'next-auth/react';
import { cva, cx } from 'class-variance-authority';

export default function UserInfo({ className, ...props }: UserInfoProps) {
  const { data: session } = useSession();

  return (
    <div className={cx(userInfo(), className)}>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name ?? ''}
          width={60}
          height={60}
          className="rounded-full mx-auto"
          {...props}
        />
      )}

      {session?.user.name && <p className="mt-2 font-bold">{session.user.name}</p>}

      {session?.user.email && <p className="opacity-50 font-small">{session.user.email}</p>}
    </div>
  );
}

const userInfo = cva(['flex', 'flex-col', 'items-center', 'gap-0_5']);

interface UserInfoProps extends Omit<ImageProps, 'src' | 'alt'> {}
