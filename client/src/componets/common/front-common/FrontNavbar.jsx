import React from 'react';
import { Link } from 'react-router-dom';

const FrontNavbar = () => {
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
          <li>
            <Link to={'#home'}>Home</Link>
          </li>
          <li>
            <Link to={'#about'}>About</Link>
          </li>
          <li>
            <Link to={'#servies'}>Servies</Link>
          </li>
          <li>
            <Link to={'#gallary'}>Gallary</Link>
          </li>
          <li>
            <Link to={'blog'}>Blog</Link>
          </li>
          <li>
            <Link to={'#contact'}>Contact Us</Link>
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
