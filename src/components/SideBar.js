import React, { useState } from 'react'
import './SideBar.css';
import { deleteIcon } from '../assets/images';
import { data1, data2 } from '../dummyData';
const SavedTableShow = ({table}) => {
    return (
        <div className='saved-outer-name'>{table.name}</div>
    )
}
const SavedQueryShow = ({query}) => {
    return (
        <div className='saved-outer'>
            <div className='saved-outer-name'>{query.name}</div>
            <button className='image-button'><img src = {deleteIcon} style={{width: "15px"}}/></button>
        </div>
    )
}
export const SideBar = ({savedQuery, setSavedQuery}) => {
    const [allTable, setAllTable] = useState([
        {
            name: "public.name",
            data: data1,
        },
        {
            name: "public.country",
            data: data2,
        },
        {
            name: "public.user",
            data: data1,
        }
    ]);
   
  return (
    <div className = "side-bar-outer-box">
        <div className='heading'>
            <h2>All Tables</h2>
            {allTable.map((table) => <SavedTableShow table={table}/>)}
        </div>
        <div className="heading">
            <h2>Saved Queries</h2>
            {savedQuery && savedQuery.map((query) => <SavedQueryShow query={query} />)}
        </div>
        
    </div>
  )
}
