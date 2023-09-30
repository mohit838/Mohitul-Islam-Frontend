import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../../constants/data';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content-area'>
        {/* slider text and btn*/}
        <div className='hero-slider-text-and-btn w-1/2'>
          <div className='hero-slider-main-text'>
            <h2>Welcome to my Portfolio</h2>
            <h1 className='hero-slider-title'>
              Hi I’m <br />
              <span className='hero-name-title'>{personalInfo?.name}</span>
              <br />
              {personalInfo?.designation}
            </h1>
            <p>{personalInfo?.info}</p>
          </div>

          {/* slider btn */}
          <div className='hero-slider-btn-group'>
            <div className='custom-btn-front'>
              <Link to={'#contact'}>{'Hire Me!'}</Link>
            </div>

            <div className='custom-btn-front-dwnl'>
              <Link
                to={`/`}
                className='front-dwnl-btn'
              >
                <span>{'Download'}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className='hero-profile-img w-1/2'>
          <img
            src={`${personalInfo?.imgUrl}`}
            alt={`${personalInfo?.alt}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
