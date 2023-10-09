import React, {useContext} from 'react'
import { crossIcon } from '../../assets/images';
import './TabBar.css';
import { AppContext } from '../../context/AppContext';

const TabComponent = ({BGcolor, tab}) => {
  const {updateActiveTab, deleteTab} = useContext(AppContext);

  return (
    <div className ="tab-component" onClick = {()=>updateActiveTab(tab)} style={{backgroundColor: `${BGcolor}`}}>
      <div className =  "tab-componentName">{tab.name}</div>
      <div className = "tab-cross-icon" onClick={(e) => { 
        e.stopPropagation();
        deleteTab(tab.queryId);
        }}>
        <img src = {crossIcon} alt = "img" style = {{width: "13px"}}/>
      </div>
    </div>
  )
}

export default TabComponent;
