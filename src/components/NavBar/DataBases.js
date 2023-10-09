
import React, { useState } from 'react';
import './NavBar.css'

// Handling the dropdown, setting the preferred ordering and grouping.
function DataBasesDropdown() {
    const [currDatabase, setCurrDatabase] = useState({});
  const databases = [
    {
        id: 1,
        name: "Project 1"
    },
    {
        id: 2,
        name: "Project 2"
    },
    {
        id: 3,
        name: "Project 3"
    }
  ]

  return (
    <div className="database-dropdown">
      <div className='database-dropdown-div'>
        <div className='database-display-text'>DataBases</div> 
        <select className = "database-select" value={currDatabase} onChange={(e) => setCurrDatabase(e.target.value)}>
          {databases.map((opt) => (
            <option key={opt} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DataBasesDropdown;
 
