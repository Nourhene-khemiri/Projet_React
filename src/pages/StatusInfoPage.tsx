import React from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

const StatusInfo: React.FC = () => {
  const tableData = [
    { id: 1, name: 'Item 1', status: 'Active' },
    { id: 2, name: 'Item 2', status: 'Inactive' },
    { id: 3, name: 'Item 3', status: 'Active' },
    // Ajoutez plus de données ici
  ];

  return (
    <Container >
      <Row className="mb-3">
        <Col>
          <Button variant="primary">Ajouter un élément</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default StatusInfo;