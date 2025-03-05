import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

interface SecurityPackageUpdatePageProps {}

const SecurityPackageUpdatePage: React.FC<SecurityPackageUpdatePageProps> = () => {
  return (
    <div className="p-4 d-flex flex-column align-items-center my-16">
      <h1 className="text-start text-sm-center">Security Package Update</h1> {/* Ajustement du titre */}
      <div className="w-100 mx-2">
        <Form>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm="auto" className="d-flex justify-content-center mb-2 mb-sm-0">
              <Form.Group controlId="formFile1">
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

export default SecurityPackageUpdatePage;