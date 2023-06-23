'use client';
import { useState } from 'react';
import Navbar from '../Common/Layouts/Navbar';
import HeroContent from './HeroContent/HeroContent';

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Navbar humburger={handleMobileMenu} openMenu={openMenu} />
      <HeroContent />
    </div>
  );
};

export default HomePage;
