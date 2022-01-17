import React from 'react';
import { FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';

const CreateService = () => {
  return (
    <>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Service name">
            <Form.Control type="text" placeholder="null" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Provider name">
            <Form.Control type="text" placeholder="null" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-1 m-1">
        <Col md>
          <FloatingLabel controlId="floatingTextarea" label="description">
            <Form.Control as="textarea" placeholder="null" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Delivery point">
            <Form.Select>
              <option>Select</option>
              <option value="1">Physical</option>
              <option value={2}>Online</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Consumer count">
            <Form.Select>
              <option>Select</option>
              <option value="1">5</option>
              <option value={2}>10</option>
              <option value={3}>20</option>
              <option value={4}>50</option>
              <option value={5}>100</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service readiness">
            <Form.Select>
              <option>Select</option>
              <option value="1">Book</option>
              <option value={2}>Readily available</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service duration">
            <Form.Select>
              <option>Select</option>
              <option value="1">24 hrs</option>
              <option value={2}>48 hrs</option>
              <option value={3}>72 hrs</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support team">
            <Form.Select>
              <option>Select</option>
              <option value="1">Yes</option>
              <option value={2}>No</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support language">
            <Form.Select>
              <option>Select</option>
              <option value="1">English</option>
              <option value={2}>Kiswahili</option>
              <option value={3}>Amharic</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingFormFile">
            <Form.Control type="file" className="" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Price">
            <Form.Control type="number" min="1" step="any" placeholder="null" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Category">
            <Form.Select>
              <option>Select</option>
              <option value="1">English</option>
              <option value={2}>Kiswahili</option>
              <option value={3}>Amharic</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className='m-2'>
        Submit
      </Button>
    </>
  );
} 

export default CreateService;
