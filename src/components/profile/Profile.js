import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const Profile = (props) => {
  return (
    <>
      <Modal show={props.isOpen} onHide={props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Some text in the modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;