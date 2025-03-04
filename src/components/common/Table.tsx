import React from 'react';

interface TableProps {
  headers: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;