'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './../ui/button';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme('light')}>
        <SunIcon />
      </Button>
      <Button onClick={() => setTheme('dark')}>
        <MoonIcon />
      </Button>
    </div>
  );
};

export default ThemeToggler;
