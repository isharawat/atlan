import React from "react";
import { useState } from "react";
import TabComponent from "./TabComponent";
import { v4 as uuid } from "uuid";
import MainEditor from "./MainEditor";
import './TabBar.css';
import { addIcon } from "../assets/images";
const TabBar = ({savedQuery, setSavedQuery}) => {
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
    if(activeTab.tabId != currTabId) {
        const tabsAfterDeletion = tabs.filter((tab) => {
          return tab.tabId != currTabId;
        })
        console.log("tabsafterdel", tabsAfterDeletion);

         setTabs(tabsAfterDeletion);
    } else {
      if(tabs.length != 1) {
        let index = 0;
        for(let i = 0; i < tabs.length; i++) {
          if(tabs[i].tabId == currTabId) {
            if(i == 0) {
              index = 0;
            } else {
              index = i - 1;
            }
          }
        }
        const tabsAfterDeletion = tabs.filter((tab) => {
          return tab.tabId != currTabId;
        })
        setTabs(tabsAfterDeletion);
        setActiveTab(tabsAfterDeletion[index]);
      } 
      else {
        const customTab = {
          name: "New Query",
          tabId: uuid(),
          code: "Select * from table",
          outputDetails: [],
        };
        setTabs([
          customTab
        ])
        setActiveTab(customTab);
      }
      
    }
  }
  console.log("currentTab", activeTab,tabs);
  return (
    <div className = "TabBarContainer">
      <div className = "TabsContainer">
      { tabs.map((tab) => (
          <TabComponent key={tab.tabId} BGcolor = {activeTab.tabId === tab.tabId? "white" : "#ccc"} setActiveTab={setActiveTab} tab={tab} onTabDelete = {()=>onTabDelete(tab.tabId)} />
        ))}
      <button onClick={handleClick}><img src = {addIcon} style={{width:"20px"}}/></button>
      </div>
      {activeTab && (
        <MainEditor activeTab={activeTab} tabs={tabs} setTabs={setTabs} savedQuery = {savedQuery} setSavedQuery = {setSavedQuery}/>
      )}
    </div>
  );
};

export default TabBar;
