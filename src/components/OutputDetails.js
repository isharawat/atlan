import React from "react";

const OutputDetails = ({outputDetails}) => {

  if (!outputDetails || outputDetails.length === 0) {
    return <></>;
  }

  const columns = Object.keys(outputDetails[0]);

  const handleExport = () => {
    console.log(outputDetails);
  };
  return (
    <div>
        
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {outputDetails.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td key={column}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleExport}>Export Data</button>
    </div>
  );
};
export default OutputDetails;
