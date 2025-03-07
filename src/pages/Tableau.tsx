import React from 'react';
import { Table } from 'react-bootstrap';

const MyTable: React.FC = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Doe</td>
          <td>John</td>
          <td>john.doe@example.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Smith</td>
          <td>Jane</td>
          <td>jane.smith@example.com</td>
        </tr>
        {/* Ajoutez d'autres lignes ici */}
      </tbody>
    </Table>
  );
};

export default MyTable;