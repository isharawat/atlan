import React, { useContext } from 'react'
import './SideBar.css';

export const SavedTable = ({table}) => {    
    
    return(
        <>
          <div className="saved-outer-name"> {table.name}</div>  
        </>
        
    );
};
