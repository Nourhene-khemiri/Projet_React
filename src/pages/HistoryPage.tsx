import React from 'react';
import Table from '../components/common/Table';
import { Container, Row, Col } from 'react-bootstrap'; 

interface HistoryPage {}

const HistoryPage: React.FC<HistoryPage> = ({}) => {
  const tableHeaders = [
    'Date/heure',
    'Vehicule',
    'position',
    'Speed',
    'Oper_status',
    'Identifier',
    'Event_status',
    'Type',
    'Level of seriousness',
    'Description',
  ];
  const tableData = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5', 'Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 5', 'Donnée 6', 'Donnée 7', 'Donnée 8', 'Donnée 9', 'Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 9', 'Donnée 10', 'Donnée 11', 'Donnée 12', 'Donnée 13', 'Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
  ];

  return (
    <Container className="mt-5"> 
      <Row>
        <Col>
        <br></br> <br></br> <br></br>
          <h3>History</h3>
        </Col>
      </Row>
      <br></br>
      <Row className="mb-3">
        <Col>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-outline-dark btn-lg">
              Download Events History
            </button>
            <button type="button" className="btn btn-outline-dark btn-lg">
              Erase Events History
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive"> 
            <Table headers={tableHeaders} data={tableData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HistoryPage;