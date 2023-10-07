import React from "react";
import { useState } from "react";
import TabComponent from "./TabComponent";
import { v4 as uuid } from "uuid";
import MainEditor from "./MainEditor";

const TabBar = () => {
  const [tabs, setTabs] = useState([
    {
      name: "New Query",
      tabId: uuid(),
      code: "Select * from table",
      outputDetails: [],
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleClick = () => {
    const newTab = {
      name: "New Query",
      tabId: uuid(),
      code: "Select * from table",
      outputDetails: [],
    };
    const alltabs = tabs;
    alltabs.push(newTab);
    setActiveTab(newTab);
    setTabs(alltabs);
  };

  const onTabDelete = (currTabId) => {
    if(activeTab.tabId == currTabId) {
        
    }
  }
  console.log("currentTab", activeTab,tabs);
  return (
    <div>
      
      { tabs.map((tab) => (
          <TabComponent key={tab.tabId} setActiveTab={setActiveTab} tab={tab} onTabDelete = {()=>onTabDelete(tab.tabId)} />
        ))}
      <button onClick={handleClick}>Add new Tab</button>
      {activeTab && (
        <MainEditor activeTab={activeTab} tabs={tabs} setTabs={setTabs} />
      )}
    </div>
  );
};

export default TabBar;
