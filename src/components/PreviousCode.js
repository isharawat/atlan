// src/Editor.js
import React, { useState, useEffect } from 'react';

import { data1, data2 } from '../dummyData';

const Editor = () => {
    const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState('');
  const [queryHistory, setQueryHistory] = useState([]);

  const [queryResult, setQueryResult] = useState([]);
  
  const handleQuerySubmit = (query) => {
    // You can implement query handling logic here.
    // For this example, we'll switch between two predefined queries.
    setToggle(false);
    setQueryResult(data1);
    setToggle(true);
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    handleQuerySubmit(query);

    // // Update query history
    // setQueryHistory([...queryHistory, query]);

    // // Save query history to localStorage
    // localStorage.setItem('queryHistory', JSON.stringify(queryHistory));
  };


  return (
    <div>
      <textarea
        placeholder="Enter SQL Query"
        value={query}
        onChange={handleQueryChange}
      />
      <button onClick={handleSubmit}>Run Query</button>
      {queryResult && (
        <div>
          {/* <h2>Query Results</h2> */}
          {/* <QueryResult data={queryResult} toggle = {toggle} setToggle = {setToggle}/> */}
        </div>
      )}
      {/* {queryHistory.length > 0 && (
        <div>
          <h6>Query History</h6>
          <ul>
            {queryHistory.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Editor;
