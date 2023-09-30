import React from 'react';

const FrontNavbar = () => {
  return (
    <section className='hero-section-nav'>
      {/* logo */}
      <div>
        <img
        className='mohitul-islam-logo'
          src='https://placeholder.com/80x60'
          alt='mohitul-islam-logo'
        />
      </div>

      {/* Navmenu */}
      <nav>
        <ul className='main-nav-menu'>
          <li>Home</li>
          <li>About</li>
          <li>Servies</li>
          <li>Gallary</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      {/* Chat Button */}
      <div>
        <button>Let's Chat</button>
      </div>
    </section>
  );
};

export default FrontNavbar;
