'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Button, { ButtonProps } from './Button';

export default function LoginButton({ dictionary, ...props }: LoginButtonProps) {
  const { data: sessionData } = useSession();

  return (
    <Button onClick={sessionData ? () => void signOut() : () => void signIn()} {...props}>
      {sessionData ? dictionary.signOut : dictionary.signIn}
    </Button>
  );
}

interface LoginButtonProps extends ButtonProps {
  dictionary: {
    signIn: string;
    signOut: string;
  };
}
