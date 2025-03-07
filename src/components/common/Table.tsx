import React from 'react';

interface TableProps {
  headers: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  const responsiveHeaders = headers.map((header, index) => {
    let className = '';
    if (index > 5) {
      className = 'd-none d-md-table-cell';
    }
    return { header, className };
  });

  return (
    <table className="table table-striped table-bordered table-hover" style={{ overflowX: 'auto', minWidth: '100%' }}>
      <thead className="table-dark">
        <tr>
          {responsiveHeaders.map(({ header, className }, index) => (
            <th key={index} scope="col" className={className}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              let className = '';
              if (cellIndex > 5) {
                className = 'd-none d-md-table-cell';
              }
              return <td key={cellIndex} className={className}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;