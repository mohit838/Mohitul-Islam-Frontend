import { Merienda, Montserrat } from 'next/font/google';
import './globals.css';

const merienda = Merienda({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: './my-font.woff2',
//   display: 'swap',
// })

export const metadata = {
  title: 'Mohitul Islam',
  description: 'Mohitul Islam Resume/Protfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merienda.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
