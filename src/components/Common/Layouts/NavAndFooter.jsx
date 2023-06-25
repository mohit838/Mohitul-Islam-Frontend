'use client';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import ContainerWrapper from '../ContainerWrappers/ContainerWrapper';
import Footer from './Footer';
import Navbar from './Navbar';

const NavAndFooter = ({ children }) => {
  const { themes, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <ContainerWrapper>
        <Navbar
          humburger={handleMobileMenu}
          openMenu={openMenu}
          setTheme={setTheme}
        />
        {children}
      </ContainerWrapper>

      {/* Footer Desing */}
      <div className="overflow-x-hidden">
        <Footer />
      </div>
    </>
  );
};

export default NavAndFooter;
