/* eslint-disable eqeqeq */
import classnames from 'classnames';
import React from 'react';
import { aboutMeInfo, skills } from '../../../constants/data';

const AboutMe = () => {
  return (
    <section
      id='about'
      className='about-me-section'
    >
      {/* About Me Image */}
      <div className='about-me-image w-1/2'>
        <img
        className=''
          src='/images/mohitul-islam.jpg'
          alt='mohitul_islam'
        />
      </div>

      {/* About me info */}
      <div className='about-me-info w-1/2'>
        {/* Info section */}
        <div className='about-info-details'>
          <span>ABOUT ME</span>
          <h2>
            <span>{aboutMeInfo?.exp}</span>
            <br />
            {aboutMeInfo?.designation}
          </h2>
          <p className=''>
           {aboutMeInfo?.aboutMe}
          </p>
        </div>

        {/* Progress bar */}
        <div className='front-progress-bar'>
          {skills?.map((skill) => (
            <div
              key={skill?.id}
              className='skill-box'
            >
              <span className='skill-title'>{skill?.skillName}</span>
              <div className='skill-bar'>
                <span
                  className={classnames({
                    'skill-percentage': true,
                    'w-[10%]': `${skill?.code}` == 1,
                    'w-[20%]': `${skill?.code}` == 2,
                    'w-[30%]': `${skill?.code}` == 3,
                    'w-[40%]': `${skill?.code}` == 4,
                    'w-[50%]': `${skill?.code}` == 5,
                    'w-[60%]': `${skill?.code}` == 6,
                    'w-[70%]': `${skill?.code}` == 7,
                    'w-[80%]': `${skill?.code}` == 8,
                    'w-[90%]': `${skill?.code}` == 9,
                    'w-[100%]': `${skill?.code}` == 10,
                  })}
                >
                  <span className='skill-tooltip'>{skill?.percentage}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
