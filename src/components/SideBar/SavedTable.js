import React, { useContext } from 'react'
import './SideBar.css';

import { AppContext } from '../../context/AppContext';

export const SavedTable = ({table}) => {    
    
    const {toggleModalVal, currDatabase} = useContext(AppContext);
    const tableName = currDatabase + "." + table.name;
    return(
        <>
          {currDatabase && <div className="saved-outer-name" onClick={()=>toggleModalVal(true)}> {tableName}</div> }
        </>
        
    );
};
