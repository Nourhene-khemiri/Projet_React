import React from 'react';
import Table from '../components/common/Table';

interface VersionPage {

}
const VersionPage: React.FC<VersionPage> = ({ }) => {
  const tableHeaders1 = ['Date/heure', 'Vehicule', 'position', 'Speed', 'Oper_status','Identifier', 'Event_status', 'Type', 'Level of seriousness', 'Description'];
  const tableHeaders2 = ['Date/heure', 'Vehicule', 'position', 'Speed', 'Oper_status','Identifier', 'Event_status', 'Type', 'Level of seriousness', 'Description'];
  const tableHeaders3 = ['Date/heure', 'Vehicule', 'position', 'Speed', 'Oper_status','Identifier', 'Event_status', 'Type', 'Level of seriousness', 'Description'];
  const tableData = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5','Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 5', 'Donnée 6', 'Donnée 7', 'Donnée 8', 'Donnée 9','Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 9', 'Donnée 10', 'Donnée 11', 'Donnée 12', 'Donnée 13','Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5']
  ];

  return (
    <div>
    
      <h3>Version</h3>
      
      <h4>Software Version</h4>
     
      
      <Table headers={tableHeaders1} data={tableData} />
      <h4>Hardware Version</h4>
     
      <Table headers={tableHeaders2} data={tableData} />
      <h4>Subsystem Components</h4>

      <Table headers={tableHeaders3} data={tableData} />

    </div>
  );
};
export default VersionPage;