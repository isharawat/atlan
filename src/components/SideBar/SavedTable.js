import React, { useContext } from 'react'
import './SideBar.css';

import { AppContext } from '../../context/AppContext';

export const SavedTable = ({table}) => {    
    
    const {toggleModalVal} = useContext(AppContext);
    return(
        <>
          <div className="saved-outer-name" onClick={()=>toggleModalVal(true)}> {table.name}</div>  
        </>
        
    );
};
