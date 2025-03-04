import React, { useState } from 'react';
import Table from '../components/common/Table';

interface OperatingDataPageProps {}

const OperatingDataPage: React.FC<OperatingDataPageProps> = ({}) => {
  const tableHeaders = ['TimesTamp', 'Vehicule', 'position', 'Identifier', 'Value'];
  const tableData = [
    ['Donnée 1', 'Donnée 2', 'Donnée 3', 'Donnée 4', 'Donnée 5'],
    ['Donnée 5', 'Donnée 6', 'Donnée 7', 'Donnée 8', 'Donnée 9'],
    ['Donnée 9', 'Donnée 10', 'Donnée 11', 'Donnée 12', 'Donnée 13'],
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <br /> <br /> <br /> <br />
      <h3>History</h3>
      <br />
      <div className="d-flex align-items-center">
        <select
          className="form-select"
          value={selectedValue}
          onChange={handleSelectChange}
          style={{ width: '250px', borderColor: 'black' }}
        >
          <option value="">Sélectionnez une option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div style={{marginLeft:"900px"}}>
        <button type="button" className="btn btn-outline-dark btn-lg ms-2" > 
          Download Events History
        </button>
        <button type="button" className="btn btn-outline-dark btn-lg ms-2"> 
          Erase Events History
        </button>
        </div>
      </div>
      <br></br>
      <Table headers={tableHeaders} data={tableData} />
      <br />
    </div>
  );
};

export default OperatingDataPage;