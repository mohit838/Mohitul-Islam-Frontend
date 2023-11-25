'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '../utils/Logo';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky z-30 top-0 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Navbar
              containerStyle={'hidden xl:flex item-center gap-x-8'}
              linksStyle={'relative hover:text-primary transition-all'}
              underlineStyle={
                'absolute left-0 top-full h-[2px] bg-primary w-full'
              }
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
