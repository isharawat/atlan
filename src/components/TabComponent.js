import React from 'react'
import { crossIcon } from '../assets/images';
import './TabBar.css';
const TabComponent = ({BGcolor, setActiveTab, tab, onTabDelete}) => {
   console.log(BGcolor);
  return (
    <button className ="TabComponent" onClick = {()=>{setActiveTab(tab)}} style={{backgroundColor: `${BGcolor}`}}>
      <div className =  "TabComponentName">{tab.name}</div>
      <div className = "TabCrossIcon" onClick={(e) => { e.stopPropagation();
        onTabDelete();}}>
        <img src = {crossIcon} style = {{width: "13px"}}/>
      </div>
    </button>
  )
}

export default TabComponent;
