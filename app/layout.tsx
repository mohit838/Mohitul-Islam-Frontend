// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from './types/Types';

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
