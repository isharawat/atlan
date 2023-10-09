import React, { useState, useContext } from "react";
import "./OutputWindow.css";
import { AppContext } from "../../context/AppContext";

const OutputWindow = () => {

  const {activeTab, savedQueries, updateTab, saveQuery} = useContext(AppContext);
  const [query, setquery] = useState("");
  
  const handleChange = (e) => {
    setquery(e.target.value);
  };

  const handleClick = () => {
    const newCurrentTab = {
      name: query ? query : activeTab.name,
      queryId: activeTab.queryId,
      code: activeTab.code,
      outputDetails: activeTab.outputDetails,
    };
    updateTab(newCurrentTab);

    const newQueries = savedQueries.filter(
      (c) => c.queryId !== activeTab.queryId
    );
    newQueries.push({
      name: query ? query : activeTab.name,
      queryId: activeTab.queryId,
      code: activeTab.code,
    });
    saveQuery(newQueries);
    setquery("");
  };

  return (
    <div className="output-window">
      <input
        className="input-field"
        type="text"
        value={query}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick} className="save-button">
        Save
      </button>
    </div>
  );
};

export default OutputWindow;
