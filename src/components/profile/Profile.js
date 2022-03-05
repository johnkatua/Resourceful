import React from 'react';
import { Modal,Button } from 'react-bootstrap';

import Slideshow from '../slideshow/SlideShow';

const Profile = (props) => {
  return (
    <>
      <Modal show={props.isOpen} onHide={props.toggle} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slideshow /> 
        </Modal.Body>
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