import React from "react";
import { data1 } from "../dummyData";
const OutputDetails = ({data}) => {
  if (!data || data.length === 0) {
    // return <div>No data available.</div>;
    return <></>;
  }

  const columns = Object.keys(data[0]);

  const handleExport = () => {
    // Implement data export logic here
    // For simplicity, we'll just log the data to the console in this example
    console.log(data);
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
              {data.map((row) => (
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
