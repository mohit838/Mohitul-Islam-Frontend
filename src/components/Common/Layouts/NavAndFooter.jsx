'use client';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import ContainerWrapper from '../ContainerWrappers/ContainerWrapper';
import Footer from './Footer';
import Navbar from './Navbar';

const NavAndFooter = ({ children }) => {
  const { themes, setTheme } = useTheme();
  const [showMode, setShowMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLightMode = () => {
    setTheme('light');
    setShowMode(true);
  };
  const handleDarkMode = () => {
    setTheme('dark');
    setShowMode(false);
  };

  return (
    <>
      <ContainerWrapper>
        <Navbar
          humburger={handleMobileMenu}
          openMenu={openMenu}
          handleLightMode={handleLightMode}
          handleDarkMode={handleDarkMode}
          showMode={showMode}
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
