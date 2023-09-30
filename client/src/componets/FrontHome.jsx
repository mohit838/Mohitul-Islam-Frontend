import React from 'react';
import FrontFooter from './common/front-common/FrontFooter';
import FrontNavbar from './common/front-common/FrontNavbar';
import FrontContactUs from './front-components/FrontContactUs';
import FrontScroller from './front-components/FrontScroller';
import AboutMe from './layouts/front-layouts/AboutMe';
import Hero from './layouts/front-layouts/Hero';
import Milestone from './layouts/front-layouts/Milestone';
import ProjectGallary from './layouts/front-layouts/ProjectGallary';
import Services from './layouts/front-layouts/Services';
import Testimonial from './layouts/front-layouts/Testimonial';

const FrontHome = () => {
  return (
    <div className=''>
      <FrontNavbar />
      <Hero />
      <FrontScroller />
      <AboutMe />
      <Services />
      <Milestone />
      <ProjectGallary />
      <Testimonial />
      <FrontContactUs />
      <FrontFooter />
    </div>
  );
};

export default FrontHome;
