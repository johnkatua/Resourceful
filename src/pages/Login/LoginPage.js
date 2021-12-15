import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login__container">
      <div className="login__form">
        <h2>Sign In</h2>
        <form className="login--form__details">
          <div className="login--form__name">
            <label>
              Name:
              <input />
            </label>
            <span>A</span>
          </div>
          <div className="login--form__password">
            <label>
              Password:
              <input />
            </label>
            <span>B</span>
          </div>
          <div className="login--form__btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
