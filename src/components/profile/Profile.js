import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact Info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Some text in the modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;