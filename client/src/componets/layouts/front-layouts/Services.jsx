import React from 'react';
import ServiceCard from '../../front-components/FrontServiceCard';

const Services = () => {
  return (
    <section
      id='servies'
      className='front-service-section'
    >
      {/* Service Head Title */}
      <div className='service-info-details'>
        <span>SERVICES</span>
        <h2>
          {'Exploring My Design'}
          <br />
          <span> {' Skills'}</span>
        </h2>
        <p className=''>
          {
            'We transform your ideas into a distinctive web project that both inspires you and captivates your customers'
          }
        </p>
      </div>

      {/* Services Card Design */}
      <div className='front-service-card'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
