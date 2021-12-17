import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login__container">
      <div className="login__form">
        <h2>Sign In</h2>
        <form className="login--form__details">
          <div className="login--form__data">
            <label>
              Name:
              <input />
            </label>
            <span>A</span>
          </div>
          <div className="login--form__data">
            <label>
              Password:
              <input />
            </label>
            <span>B</span>
          </div>
          <div className="login--form__btn">
            <button>Submit</button>
          </div>
          <p>
            I do not have an account. Sign Up Now!
            <Link to="/register">
              <BsArrowRight />
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
