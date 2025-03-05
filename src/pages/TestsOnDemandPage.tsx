import React from 'react';

interface TestsOnDemandPage {

}
const TestsOnDemandPage: React.FC<TestsOnDemandPage> = ({ }) => {
  return (
    <div> 
       
    <h3>Status Info</h3>
    
     
   
   


    
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>Colonne 1</th>
          <th>Colonne 2</th>
          <th>Colonne 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Donnée 1</td>
          <td>Donnée 2</td>
          <td>Donnée 3</td>
        </tr>
        <tr>
          <td>Donnée 4</td>
          <td>Donnée 5</td>
          <td>Donnée 6</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};
export default TestsOnDemandPage;