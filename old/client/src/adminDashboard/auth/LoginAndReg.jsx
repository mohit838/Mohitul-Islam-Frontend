import React from "react";

const LoginAndReg = () => {
  return (
    <>
      <div className="loginContainer" id="loginContainer">
        <div className="formContainer signUpContainer">
          <form action="#">
            <h1 className="headTitle">Create Account</h1>
            <div className="socialContainer">
              <a href="#" className="socialMedia">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="socialMedia">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="socialMedia">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="headTitle">Sign in</h1>
            <div className="social-container">
              <a href="#" className="socialMedia">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="socialMedia">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="socialMedia">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="headTitle">Welcome Back!</h1>
              <p className="subtitleLogin">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="headTitle">Hello, Friend!</h1>
              <p className="subtitleLogin">
                Enter your personal details and start journey with us
              </p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" href="#" rel="noreferrer">
            Mohitul Islam
          </a>
        </p>
      </footer>
    </>
  );
};

export default LoginAndReg;
