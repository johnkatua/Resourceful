import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import Face from "../../../assets/Images/ali.jpeg";

const ProfileSidebar = () => {
  return (
    <div className="profile--sidebar__container">
      <div className="profile--sidebar__avatar">
        <span>
          <img src={Face} alt="avatar" className="img" />
        </span>
      </div>
      <div className="profile--sidebar__links">
        <>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
          </Navbar>
          {/* <Navbar.Divider /> */}
          <Navbar bg="light">
            <Container>
              <Navbar.Brand>Brand text</Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar bg="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" /> React
                Bootstrap
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      </div>
    </div>
  );
}

export default ProfileSidebar;
