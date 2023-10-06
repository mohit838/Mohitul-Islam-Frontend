import React from "react";
import logo1 from "./pic/f_logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="img">
            <img src={logo1} alt="logo" />
          </div>
          <p>© 2021. All rights reserved by gRio-Themes.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
