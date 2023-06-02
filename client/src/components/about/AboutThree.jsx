import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";
import {
  AwardContnet,
  ServiceContent,
  TestimonilContent,
  aboutImg,
  aboutInfo,
  biographyInfo,
  personalInfo,
} from "../../data/data";

const AboutThree = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img
                      src={`${aboutImg?.imgSrc}`}
                      alt={`${aboutImg?.altTag}`}
                    />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>{aboutInfo?.infoTitle}</p>
                  <h3>{aboutInfo?.infoName}</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>{biographyInfo?.secTitle}</h3>
                </div>
                <div className="about-text">
                  {biographyInfo?.bioInfo?.map((bInfo) => (
                    <p key={bInfo?.id}>{bInfo?.text}</p>
                  ))}
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        {personalInfo?.pInfos1?.map((pInfo1) => (
                          <li key={pInfo1?.id}>
                            <label>{pInfo1?.label}:</label>
                            <span>{pInfo1?.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        {personalInfo?.pInfos2?.map((pInfo2) => (
                          <li key={pInfo2?.id}>
                            <label>{pInfo2?.label}:</label>
                            <span>{pInfo2?.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services ServiceContent={ServiceContent} />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards AwardContnet={AwardContnet} />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials TestimonilContent={TestimonilContent} />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutThree;
