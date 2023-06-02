import React from "react";
import TextLoop from "react-text-loop";
import {
  arrOfNavMenusLinks,
  profileImg,
  sliderContent,
  sliderInfo,
} from "../../data/data";

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>{sliderInfo?.smallHeadTitle}</h6>
                <h1 className="font-alt">{sliderContent?.name}</h1>
                <TextLoop>
                  {sliderInfo?.loopText?.map((leadText) => (
                    <p key={leadText?.id} className="loop-text lead">
                      {leadText?.title}
                    </p>
                  ))}
                </TextLoop>
                <p className="desc">{sliderContent?.description}</p>
                <div className="d-flex btn-wrapper">
                  <a
                    className="px-btn px-btn-theme mr-4"
                    href={`#${arrOfNavMenusLinks?.work}`}
                  >
                    {sliderContent?.btnText2}
                  </a>
                  <a
                    className="px-btn btn-outline "
                    href={`#${arrOfNavMenusLinks?.contactus}`}
                  >
                    {sliderContent?.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <img
                src={`${profileImg?.imgSrc}`}
                alt={`${profileImg?.altTag}`}
              />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href={`#${arrOfNavMenusLinks?.about}`}>
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
