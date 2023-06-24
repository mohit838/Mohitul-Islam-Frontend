'use client';
import { useState } from 'react';
import Navbar from '../Common/Layouts/Navbar';
import HeroContent from './HeroContent/HeroContent';
import Work from './Work/Work';

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Navbar humburger={handleMobileMenu} openMenu={openMenu} />
      <HeroContent />
      <Work />
    </div>
  );
};

export default HomePage;
