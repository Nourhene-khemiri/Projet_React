import React from 'react';
import Table from '../components/common/Table';

interface StatusInfoPageProps {}

const StatusInfoPage: React.FC<StatusInfoPageProps> = ({}) => {
  const tableHeaders = ['Identifier', 'Description', 'Level of seriousness', 'Type', 'Vehicle'];
  const tableData = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 5', 'Donnée 6', 'Donnée 7', 'Donnée 8', 'Donnée 9'],
    ['Donnée 9', 'Donnée 10', 'Donnée 11', 'Donnée 12', 'Donnée 13']
  ];

  return (
    <div>
      <br></br> <br></br> <br></br> <br></br> 
      <h3>Status Info</h3>
      
      <button type="button" className="btn btn-outline-dark btn-lg">
        Download Status Info
      </button>
      <br />
      <br />
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default StatusInfoPage;