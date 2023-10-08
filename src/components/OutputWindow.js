import React, { useState } from "react";
import './OutputWindow.css';
const OutputWindow = ({setSavedQuery, savedQuery, activeTab, tabs, setTabs}) => {
    const [query, setquery] = useState("");
    const handleChange = (e) => {
        setquery(e.target.value);
    }
    const handleClick = () => {
        const newtab = tabs.map((c) => {
            if (c.tabId === activeTab.tabId) {
              // Increment the clicked counter
              const newCurrentTab = {
                name: query ? query:c.name,
                tabId: c.tabId,
                code: c.code,
                outputDetails: c.outputDetails,
              }
              return newCurrentTab;
            } else {
              return c;
            }
          })
          setTabs(newtab);
          setSavedQuery([...savedQuery, {
            name: query ? query:activeTab.name,
            code: activeTab.code,
          }])
          setquery("");

    }
    return (
        <div className="output-window">
            <input className ='input-field' type = 'text' value={query} onChange = {handleChange}></input>
            <button onClick= {handleClick} className="save-button">Save</button>
        </div>
    )
}
export default OutputWindow;