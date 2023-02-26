'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import IconButton, { IconButtonProps } from './IconButton';

export default function LoginButton({ ...props }: LoginButtonProps) {
  const { data: sessionData } = useSession();

  return (
    <IconButton
      iconSrc={
        sessionData ? '/svg/arrow-right-from-bracket.svg' : '/svg/arrow-right-to-bracket.svg'
      }
      onClick={sessionData ? () => void signOut() : () => void signIn()}
      {...props}
    />
  );
}

interface LoginButtonProps extends Omit<IconButtonProps, 'iconSrc'> {}
