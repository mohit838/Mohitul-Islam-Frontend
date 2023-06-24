'use client';
import ContainerWrapper from '@/components/Common/ContainerWrappers/ContainerWrapper';
import Footer from '@/components/Common/Layouts/Footer';
import Navbar from '@/components/Common/Layouts/Navbar';
import HomePage from '@/components/HomePage/HomePage';
import { useState } from 'react';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const year = new Date().getFullYear();
  const devName = 'GhostRio Developer';

  return (
    <main>
      <ContainerWrapper>
        <Navbar humburger={handleMobileMenu} openMenu={openMenu} />
        <HomePage />
      </ContainerWrapper>

      {/* Footer Desing */}
      <div className="overflow-x-hidden">
        <Footer year={year} devName={devName} />
      </div>
    </main>
  );
}
