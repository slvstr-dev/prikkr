'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {}

export default function UserInfo({ ...props }: UserInfoProps) {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div {...props}>
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? ''}
            width={96}
            height={96}
            className="rounded-full mb-4 mx-auto"
          />
        )}

        <pre className="rounded-3xl p-4 bg-white">{JSON.stringify(session.user, null, 2)}</pre>
      </div>
    );
  }

  return null;
}
