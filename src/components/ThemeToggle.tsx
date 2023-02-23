'use client';

import { useEffect, useState } from 'react';
import IconButton, { IconButtonProps } from './IconButton';

interface ThemeToggleProps extends Pick<IconButtonProps, 'className' | 'size'> {}

export default function ThemeToggle({ ...props }: ThemeToggleProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');

      setIsDarkTheme(true);
    }
  }, []);

  const handleToggleMode = () => {
    if (isDarkTheme) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');

      setIsDarkTheme(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');

      setIsDarkTheme(true);
    }
  };

  return (
    <IconButton
      onClick={handleToggleMode}
      src={isDarkTheme ? '/svg/lightbulb.svg' : '/svg/moon.svg'}
      {...props}
    />
  );
}
