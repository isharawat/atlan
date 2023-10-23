import React, { useContext } from 'react'
import { crossIcon } from '../../assets/images';
import './TabBar.css';
import { AppContext } from '../../context/AppContext';

const TabComponent = ({ styleTab, tab }) => {
  const { updateActiveTab, deleteTab } = useContext(AppContext);

  return (
    <div className="tab-component" onClick={() => updateActiveTab(tab)} style={styleTab}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="tab-componentName">{tab.name}</div>
        <div onClick={(e) => {
          e.stopPropagation();
          deleteTab(tab.queryId);
        }}>
          <img className="tab-cross-icon" src={crossIcon} alt="img" style={{ width: "13px", }} />
        </div>
      </div>

    </div>
  )
}

export default TabComponent;
