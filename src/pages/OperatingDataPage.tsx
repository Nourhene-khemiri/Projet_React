import React from 'react';
import Table from '../components/common/Table';
import Button from '../components/common/Button';
import { Form } from 'react-bootstrap';

const OperatingDataPage: React.FC = () => {
  const tableHeaders = [
    'Column 1',
    'Column 2',
    'Column 3',
    'Column 4',
  ];

  const tableData = [
    ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
    ['Data 5', 'Data 6', 'Data 7', 'Data 8'],
    ['Data 9', 'Data 10', 'Data 11', 'Data 12'],
  ];

  return (
    <div>
      <h2>Operating Data</h2>
      
      <div className="d-flex justify-content-start mb-3 gap-2">
        <Form.Select size="sm" aria-label="Default select example" className="w-25 form-select-sm">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Form.Select>

        <div className="d-flex justify-content-end gap-2 w-100">
          <Button text="Start Record" />
          <Button text="Stop Record" />
        </div>
      </div>

      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default OperatingDataPage;