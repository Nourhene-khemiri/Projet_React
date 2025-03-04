import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

interface MaintenancePage {}

const MaintenancePage: React.FC<MaintenancePage> = ({}) => {
  return (
    <Container className="pt-5 mt-5">
      <Row>
        <Col>
          <h3>Maintenance </h3> 
        </Col>
      </Row>
      <Row>
        <Col>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};


export default MaintenancePage;