
import React, { useContext } from 'react';
import './../NavBar/NavBar.css';
import { AppContext } from '../../context/AppContext';

// Handling the dropdown, setting the preferred ordering and grouping.
function DataBasesDropdown() {
  const {currDatabase, databaseChange} = useContext(AppContext);
  const databases = [
    {
        id: 1,
        name: "Project1"
    },
    {
        id: 2,
        name: "Project2"
    },
    {
        id: 3,
        name: "Project3"
    }
  ]

  return (
    <div className="database-dropdown">
      <div className='database-dropdown-div'>
        <div className='database-display-text'>DataBases</div> 
        <select className = "database-select" value={currDatabase} onChange={(e)=>databaseChange(e.target.value)}>
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
 
