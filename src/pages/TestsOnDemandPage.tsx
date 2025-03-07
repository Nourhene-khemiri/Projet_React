import React from 'react';
import { Form } from 'react-bootstrap';
import Button from '../components/common/Button';
import Table from '../components/common/Table';

interface TestsOnDemandPage {

}
const TestsOnDemandPage: React.FC<TestsOnDemandPage> = ({ }) => {
  const tableHeaders = [
    'Step',
    'Description',
    'Result',
    
  ];

  const tableData = [
    ['xxx', 'xxx', 'xxx'],
    ['xxx', 'xxx', 'xxx'],
    ['xxx', 'xxx', 'xxx'],
  ];

  return (
    <div>
    <h2>Test On Demand</h2>
    
    <div className="d-flex justify-content-start mb-3 gap-2">
      <Form.Select size="sm" aria-label="Default select example" className="w-25 form-select-sm">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>

      <div className="d-flex justify-content-end gap-2 w-100">
        <Button text="Start Test" />
        <Button text="Stop Test" />
      </div>
    </div>

    <Table headers={tableHeaders} data={tableData} />
  </div>
);
};
export default TestsOnDemandPage;