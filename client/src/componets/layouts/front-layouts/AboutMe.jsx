import React from 'react';

const AboutMe = () => {
  return (
    <section
      id='#about'
      className='about-me-section'
    >
      {/* About Me Image */}
      <div className='about-me-image w-1/2'>
        <img
          src='/images/mohit.jpg'
          alt='mohitul_islam'
        />
      </div>

      {/* About me info */}
      <div className='about-me-info w-1/2'>
        {/* Info section */}
        <div className='about-info-details'>
          <span>ABOUT ME</span>
          <h2>
            <span>3 Year’s Experience</span>
            <br />
            on Frontend Engineering
          </h2>
          <p className=''>
            I possess three years of professional experience in the software
            industry, with one year of dedicated employment in this field.
            During my tenure, I have actively contributed to numerous projects,
            some of which have been successfully deployed on the web. I am
            currently employed at a software company, where I continue to grow
            and contribute to the industry.
          </p>
        </div>

        {/* Progress bar */}
        <div className='front-progress-bar'>
          {/* {skills?.map((skill) => (
            <div
              key={skill?.id}
              className='skill-box'
            >
              <span className='skill-title'>{skill?.skillName}</span>
              <div className='skill-bar'>
                <span className={`skill-percentage w-[${skill?.percentage}]`}>
                  <span className='skill-tooltip'>{skill?.percentage}</span>
                </span>
              </div>
            </div>
          ))} */}
          <div className='skill-box'>
            <span className='skill-title'>JavaScript</span>
            <div className='skill-bar'>
              <span className={`skill-percentage w-[90%]`}>
                <span className='skill-tooltip'>90%</span>
              </span>
            </div>
          </div>
          <div className='skill-box'>
            <span className='skill-title'>React</span>
            <div className='skill-bar'>
              <span className={`skill-percentage w-[70%]`}>
                <span className='skill-tooltip'>80%</span>
              </span>
            </div>
          </div>
          <div className='skill-box'>
            <span className='skill-title'>Node</span>
            <div className='skill-bar'>
              <span className={`skill-percentage w-[90%]`}>
                <span className='skill-tooltip'>90%</span>
              </span>
            </div>
          </div>
          <div className='skill-box'>
            <span className='skill-title'>TypeScript</span>
            <div className='skill-bar'>
              <span className={`skill-percentage w-[80%]`}>
                <span className='skill-tooltip'>80%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
