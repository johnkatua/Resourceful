import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";

import { signOut } from "../../../redux/action/Authentication";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.authentication);
  console.log(currentUser);


  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("login");
  };

  const navigateToRegister = (e) => {
    e.preventDefault();
    navigate("register");
  };

  const navigateToProfile = (e) => {
    e.preventDefault();
    navigate("profile");
  }

  const handleSignOut = () => {
    dispatch(signOut());
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
          {currentUser !== null ? (
            <div className="header--auth__details">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {currentUser.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={navigateToProfile}>Your Dashboard</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="header--auth__btn" onClick={handleSignOut}>
                SignOut
              </button>
            </div>
          ) : (
            <>
              <button className="header--auth__signIn" onClick={navigateToLogin}>
                Sign In
              </button>
              <button className="header--auth__signUp" onClick={navigateToRegister}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
