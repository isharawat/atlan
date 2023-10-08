import React, {useContext} from 'react'
import { crossIcon } from '../../assets/images';
import './TabBar.css';
import { AppContext } from '../../context/AppContext';
const TabComponent = ({BGcolor, tab}) => {
  const {updateActiveTab, deleteTab} = useContext(AppContext);

  return (
    <button className ="TabComponent" onClick = {()=>updateActiveTab(tab)} style={{backgroundColor: `${BGcolor}`}}>
      <div className =  "TabComponentName">{tab.name}</div>
      <div className = "TabCrossIcon" onClick={(e) => { 
        e.stopPropagation();
        deleteTab(tab.queryId);
        }}>
        <img src = {crossIcon} alt = "img" style = {{width: "13px"}}/>
      </div>
    </button>
  )
}

export default TabComponent;
