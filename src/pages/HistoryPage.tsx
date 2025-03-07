import React from 'react';
import Table from '../components/common/Table';
import Button from '../components/common/Button';

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
    <div>
      <h2>History</h2>
      <div className="d-flex justify-content-start mb-3">
        <div className="me-2">
          <Button text="Download Events History"/>
        </div>
        <div>
          <Button text="Erease Events Histoy" />
        </div>
      </div>

      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default HistoryPage;