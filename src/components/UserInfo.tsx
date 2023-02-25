'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function UserInfo({ ...props }: UserInfoProps) {
  const { data: session } = useSession();

  return (
    <>
      {session?.user && (
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

          <pre className="rounded-3xl p-4 bg-white whitespace-pre-wrap break-all">
            {JSON.stringify(session.user, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
}

interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {}
