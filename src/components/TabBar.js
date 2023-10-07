import React from 'react'
import { useState } from 'react';
import TabComponent from './TabComponent';
import { v4 as uuid } from 'uuid';
import { Editor } from '@monaco-editor/react';
const TabBar = () => {
    const [tabs, setTabs] = useState([{
        name: "New Query",
        tabId: uuid(),
        code: "Select * from table",
        outputDetails: {},
    }]);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const handleClick = () => {
        setTabs([...tabs, {
            name: "New Query",
            tabId: uuid(),
            code: "Select * from table",
            outputDetails: {},
        }]);
    }
  return (
    <div>
        {tabs.length && tabs.map((tab) => <TabComponent onClick = {setActiveTab(tab)} tab = {tab}/>)}
      <button onClick={handleClick}>Add new Tab</button>
      {activeTab && <Editor activeTab = {activeTab} tabs = {tabs} setTabs = {setTabs}/>}
    </div>
  )
}

export default TabBar
