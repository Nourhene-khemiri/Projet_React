import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface SecurityEventsPageProps {}

const SecurityEventsPage: React.FC<SecurityEventsPageProps> = ({}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" >
         <h1 className="text-start text-sm-center">Security Events </h1>
      <Row className="text-center">
        <Col xs={12} className="mb-3">
           <Button variant="outline-dark" type="button">
            Doawnload Security Events
          </Button>
        </Col>
        <Col xs={12}>  <Button variant="outline-dark" type="button">
            Erease All Security Events
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SecurityEventsPage;