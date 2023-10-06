import React from 'react';
import { Link } from 'react-router-dom';

const FrontNavbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero-section-nav'>
      {/* logo */}
      <div>
        <Link to={'/'}>
          <h2 className='mohitul-islam-logo'>Mohit</h2>
        </Link>
      </div>

      {/* Navmenu */}
      <nav>
        <ul className='main-nav-menu'>
          <li onClick={() => scrollToSection('home')}>
            <Link to={''}>Home</Link>
          </li>
          <li onClick={() => scrollToSection('about')}>
            <Link to={''}>About</Link>
          </li>
          <li onClick={() => scrollToSection('servies')}>
            <Link to={''}>Servies</Link>
          </li>
          <li onClick={() => scrollToSection('gallary')}>
            <Link to={''}>Gallary</Link>
          </li>
          <li>
            <Link to={'blog'}>Blog</Link>
          </li>
          <li onClick={() => scrollToSection('contact')}>
            <Link to={''}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Chat Button */}
      <div className='custom-btn-front font-logo'>
        <Link to={'#contact'}>{"Let's Chat"}</Link>
      </div>
    </div>
  );
};

export default FrontNavbar;
