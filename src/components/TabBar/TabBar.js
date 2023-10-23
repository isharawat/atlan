import React from "react";
import TabComponent from "./TabComponent";
import MainEditor from "./MainEditor";
import "./TabBar.css";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import OutputDetails from "../Output/OutputDetails.js";
import { AppContext } from "../../context/AppContext";
import { addIcon, resetIcon } from "../../assets/images";

const TabBar = () => {

  const { tabs, addTab, activeTab, updateActiveTab, resetClick } = useContext(AppContext);
  const active = tabs.filter((c) => c.queryId === activeTab.queryId);
  const {outputDetails} = active[0];

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

  const allTab = {
    backgroundColor : "#60717e",
    color: "white",
    cursor: "pointer",
    fontSize: "13px",
    display: "inline-block",
    padding: "2px 0px 0px 10px",
  }
  const activeStyle = {
    backgroundColor : "rgb(244 250 254)",
    color: "#60717e", 
    cursor: "pointer",
    fontSize: "13px",
    display: "inline-block",
    padding: "2px 0px 0px 10px",
  }
                
  return (
    <>
      <div className="tab-bar-container">
        <div className="tabs-container">
          <div className="inline tabs-left">
          {
            tabs.map((tab) => (
              <TabComponent
                key={tab.queryId}
                styleTab={activeTab.queryId === tab.queryId ? activeStyle : allTab}
                
                tab={tab}
              />
            ))}

          <div className="add-icon-box" onClick={handleClick}>
            <img
              src={addIcon}
              alt="img"
              style={{
                width: "15px",
                backgroundColor: "#f3f3f3",
                alignItems: "center",
              }}
            />
                   
          </div>
          </div>
          <div className="inline" onClick={resetClick}>
            <img
              src={resetIcon}
              alt="img"
              style={{
                width: "17px",
                backgroundColor: "#f3f3f3",
                cursor: "pointer",
                margin: "0px 2px",
              }}
            /></div>
          
        </div>

        {activeTab && tabs.length && <MainEditor />}
        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>
    </>
  );
};

export default TabBar;
