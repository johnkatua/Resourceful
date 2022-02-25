import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEmail, MdPhone, MdModeEdit } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { OverlayTrigger, Tooltip, Modal, Button } from "react-bootstrap";

import { getProfileByAccount } from "../../../redux/action/Profile";

const Account = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.authentication);
  const userId = currentUser.id;

  console.log(profile);

  useEffect(() => {
    dispatch(getProfileByAccount(userId));
  }, [dispatch, userId]);

  return (
    <div>
      {profile.map((profile) => {
        const { about, email, facebook, instagram, linkedIn, location, phone, twitter, website } = profile;
        return (
          <div className="profile--data">
            <div className="profile--data__container">
              <div className="profile--data__header">
                <h1>My Profile</h1>
                <>
                  <span onClick={handleShow}>
                    <MdModeEdit />
                  </span>
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Create and Edit profile</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="success" onClick={handleClose}>Create Profile</Button>
                      <Button variant="primary" onClick={handleClose}>Edit Profile</Button>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
              <div className="profile--data__body">
                <div className="profile--data__body--about">{about}</div>
                <div className="profile--data__body--contact">
                  <h2>Social Links</h2>
                  {facebook !== "N/A" ? (
                    <span>
                      <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <BsFacebook />
                      </a>
                    </span>
                  ) : null}
                  {instagram !== "N/A" ? (
                    <span>
                      <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                      </a>
                    </span>
                  ) : null}
                  {linkedIn !== "N/A" ? (
                    <span>
                      <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                      </a>
                    </span>
                  ) : null}
                  {twitter !== "N/A" ? (
                    <span>
                      <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                      </a>
                    </span>
                  ) : null}
                  {website !== "N/A" ? (
                    <span>
                      <a href={website} target="_blank" rel="noopener noreferrer">
                        {website}
                      </a>
                    </span>
                  ) : null}
                </div>
                <div className="profile--data__body--contact">
                  <h2 className="profile--data__body--header">Contact</h2>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">{email}</Tooltip>}>
                    <span>
                      <MdOutlineEmail />
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">{phone}</Tooltip>}>
                    <span>
                      <MdPhone />
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">{location}</Tooltip>}>
                    <span>
                      <GoLocation />
                    </span>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
