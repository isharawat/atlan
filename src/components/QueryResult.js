// src/QueryResult.js
import React, { useState } from "react";

const QueryResult = ({ data, toggle, setToggle}) => {
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

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {toggle ? (
        <>
          
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default QueryResult;
