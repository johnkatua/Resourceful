import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap"

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.authentication);
  console.log(currentUser);

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="profile--header">
      <h2>Resourceful</h2>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {currentUser.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={navigateToHome}>Back Home</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ProfileHeader;
