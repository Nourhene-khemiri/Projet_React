import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/common/Button'; 

interface SecurityEventsPageProps {}

const SecurityEventsPage: React.FC<SecurityEventsPageProps> = ({}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="text-center mb-4">Security Events</h1>
        <div className="d-flex flex-column gap-3 w-100">
          <Button text="Download Security Events" />
          <Button text="Erase All Security Events" />
        </div>
      </div>
    </Container>
  );
};

export default SecurityEventsPage;