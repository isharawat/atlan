import React from "react";
import TabComponent from "./TabComponent";
import MainEditor from "../MainEditor";
import "./TabBar.css";
import { v4 as uuid } from "uuid";
import { addIcon} from "../../assets/images";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TabBar = () => {
  const { tabs, addTab, activeTab, updateActiveTab } = useContext(AppContext);

  if (!activeTab) {
    updateActiveTab(tabs[0]);
  }

  const handleClick = () => {
    const newTabData = {
      name: "New Query",
      queryId: uuid(),
      code: "Select * from table",
      outputDetails: [],
    };
    addTab(newTabData);
  };

  return (
    <div className="tab-bar-container">
        <div className="tabs-container">
          {activeTab &&
            tabs.length &&
            tabs.map((tab) => (
              <TabComponent
                key={tab.queryId}
                BGcolor={activeTab.queryId === tab.queryId ? "#e6e6e6" : "#ccc"}
                tab={tab}
              />
            ))}

          <div className="add-icon-box" onClick={handleClick}>
            <img
              src={addIcon}
              alt="img"
              style={{
                width: "17px",
                backgroundColor: "#f3f3f3",
                alignItems: "center",
              }}
            />
          </div>
        </div>
        
    
      {activeTab && tabs.length && <MainEditor />}
    </div>
  );
};

export default TabBar;
