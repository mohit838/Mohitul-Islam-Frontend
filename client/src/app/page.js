'use client';
import ContainerWrapper from '@/components/Common/ContainerWrappers/ContainerWrapper';
import Navbar from '@/components/Common/Layouts/Navbar';
import HomePage from '@/components/HomePage/HomePage';
import { useState } from 'react';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main>
      <ContainerWrapper>
        <Navbar humburger={handleMobileMenu} openMenu={openMenu} />
        <HomePage />
      </ContainerWrapper>
    </main>
  );
}
