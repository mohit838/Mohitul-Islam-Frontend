'use client';

import { ThemeProvider } from 'next-themes';

// Ref: https://github.com/pacocoursey/next-themes
// File extention mustbe js or jsx {what i see}

export default function NextThemeProvider({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
