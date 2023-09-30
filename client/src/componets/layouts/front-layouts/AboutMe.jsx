import React from 'react';

const AboutMe = () => {
  return (
    <section className='about-me-section'>
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
        <div className=''>
          <span>ABOUT ME</span>
          <h2>
            <span>20 Year’s Experience</span>
            on Product Design
          </h2>
          <p>
            Hello there! I'm Robert Junior. I specialize in web design and
            development, and I'm deeply passionate and committed to my craft.
            With 20 years of experience as a professional graphic designer
          </p>
        </div>

        {/* Progress bar */}
        <div className=''>
          <div>
            <h3>React</h3>
            progressBar
          </div>
          <div>
            <h3>React</h3>
            progressBar
          </div>
          <div>
            <h3>React</h3>
            progressBar
          </div>
          <div>
            <h3>React</h3>
            progressBar
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
