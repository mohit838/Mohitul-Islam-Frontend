import React from 'react';

const ServiceCard = () => {
  return (
    <div className='front-single-service-card'>
      {/* Icon */}
      <div className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='icon icon-tabler icon-tabler-source-code'
          width='90'
          height='90'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='#fff'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path
            stroke='none'
            d='M0 0h24v24H0z'
            fill='none'
          />
          <path d='M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5' />
          <path d='M6 5l-2 2l2 2' />
          <path d='M10 9l2 -2l-2 -2' />
        </svg>
      </div>
      {/* Title */}
      <div className='service-card-title'>
        Website / App Design UX / UI Design
      </div>
      {/* Para / text */}
      <div className='service-card-para'>
        Creating Engaging Digital Experiences for Websites and Apps through
        UX/UI Design
      </div>
    </div>
  );
};

export default ServiceCard;
