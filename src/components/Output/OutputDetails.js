import React from "react";

const OutputDetails = ({ outputDetails }) => {
  if (!outputDetails || outputDetails.length === 0) {
    return <></>;
  }
  const columns = Object.keys(outputDetails[0]);
  return (
    <div className="outer-data-table">
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

    </div>
  );
};
export default OutputDetails;
