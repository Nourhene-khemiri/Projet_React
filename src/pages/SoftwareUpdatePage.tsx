import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

interface SoftwareUpdatePageProps {}

const SoftwareUpdatePage: React.FC<SoftwareUpdatePageProps> = () => {
  return (
    <div className="p-4 d-flex flex-column align-items-center my-16">
      <h1 className="text-start">Software Update</h1> 
      <div className="w-100 mx-2">
        <Form>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm="auto" className="d-flex justify-content-center mb-2 mb-sm-0">
              <Form.Group controlId="formFile1">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col xs={12} sm="auto" className="d-flex justify-content-center mb-2 mb-sm-0">
              <Button variant="outline-dark" type="button">
                Upload 
              </Button>
            </Col>
            <Col xs={12} sm="auto" className="d-flex justify-content-center mb-2 mb-sm-0">
              <Form.Group controlId="formFile2">
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col xs={12} sm="auto" className="d-flex justify-content-center">
              <Button variant="outline-dark" type="button">
                Upload 
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SoftwareUpdatePage;