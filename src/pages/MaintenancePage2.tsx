import React from 'react';
import { Table } from 'react-bootstrap';

const MaintenancePage2: React.FC = () => {
  return (
    <div className="table-container">
      <Table responsive="md" className="table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MaintenancePage2;