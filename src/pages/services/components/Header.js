import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/ServiceHeader.css";

const Header = () => {
  return (
    <div className="service--header__container">
      <Link to="/">
        <button className="service--header__btn">Back Home</button>
      </Link>
      <input placeholder="Search Service 🔍" />
    </div>
  );
};

export default Header;
