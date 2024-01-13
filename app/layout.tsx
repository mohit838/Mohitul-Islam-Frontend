// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Metadata } from '../types/Types';
import './globals.css';

// @ThemeProvider
import NextThemeProvider from '@/components/layouts/ThemeProvider';

// @Components
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohitul Islam | Frontend Engineer',
  description: 'Mohitul Islam frontend engineer',
  authors: [{ name: 'Mohitul Islam', role: 'Frontend Engineer' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
