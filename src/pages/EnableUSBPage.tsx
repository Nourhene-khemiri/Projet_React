import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

interface EnableUSBPage {

}
const SecurityEventsPage: React.FC<EnableUSBPage> = ({ }) => {
    return (
        <div className="p-4 d-flex flex-column align-items-center my-16">
          <h1 className="text-start text-sm-center">Enable USB</h1>
          <div className="w-100 mx-2">
            <Form>
              <Row className="justify-content-center align-items-center">
                
                <Col xs={12} sm="auto" className="mb-2 mb-sm-0">
                  <Form.Group controlId="authenticationInput">
                    <Form.Control type="text" placeholder="<User Input>" />
                  </Form.Group>
                </Col>
              
                <Col xs={12} sm="auto" className="d-flex justify-content-center">
      <Button variant="outline-dark" type="button">Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      );
};
export default SecurityEventsPage;