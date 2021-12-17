import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("login");
  };

  const navigateToRegister = (e) => {
    e.preventDefault();
    navigate("register");
  };
  return (
    <div className="header__container">
      <div className="header__title">
        <h3>Resourceful</h3>
        <div className="header__search">
          <input type="text" placeholder="Search Service" />
          🔍
        </div>
        <div className="header__auth">
          <button onClick={navigateToLogin}>Sign In</button>
          <button onClick={navigateToRegister}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
