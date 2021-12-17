import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register__container">
      <div className="register__form">
        <h2>Sign Up</h2>
        <form className="register--form__details">
          <div className="register--form__data">
            <label>
              Name:
              <input />
            </label>
            <span>A</span>
          </div>
          <div className="register--form__data">
            <label>
              Email:
              <input />
            </label>
            <span>A</span>
          </div>
          <div className="register--form__data">
            <label>
              Password:
              <input />
            </label>
            <span>
              A
            </span>
          </div>
          <div className="register__account">
            <select id="account_type">
              <option value="normal_user">Normal User</option>
              <option value="company">Service Provider</option>
            </select>
          </div>
          <div className="register--form__btn">
            <button>Submit</button>
          </div>
          <p>
            Already have an account. Sign In Now!
            <Link to="/login"><BsArrowRight /></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
