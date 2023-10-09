import React, {useContext, useState } from "react";
import "./SideBar.css";
import { AppContext } from "../../context/AppContext";
import { addIcon, deleteIcon } from "../../assets/images";
import { SavedTable } from "./SavedTable";
import { data1 } from "../../dummyData";
import {allTable}  from "../../dummyTable";
export const SideBar = () => {
  const {tabs, addTab, savedQueries, updateActiveTab, saveQuery, toggleModalVal} = useContext(AppContext);
  const [tableData, setTableData] = useState(allTable);
  const onSavedQueryClick = (query) => {
    toggleModalVal(false);
    let found = 0;
    let currTab = {};
    for(let tab in tabs) {
        if(tabs[tab].queryId === query.queryId) {
            found = 1;
            currTab = tabs[tab];
            break;
        }
    }
    if(!found) {
        const currNew = {
            name: query.name,
            queryId: query.queryId,
            code: query.code,
            outputDetails: [],
          };
          addTab(currNew);
          updateActiveTab(currNew);
    }
    else {
        updateActiveTab(currTab);
    }
  };
  const addTableClick = () => {
    setTableData([...tableData, {
      name: "public.user",
      data: data1,
    }])
  }
  const handleDelete = (query) => {
    const newSavedQuery = savedQueries.filter(
      (c) => c.queryId !== query.queryId
    );
    saveQuery(newSavedQuery);
  };

  return (
    <div className="side-bar-outer-box">
      <div>
        <button className="add-new-button" onClick={()=>addTableClick()}>
          <img src = {addIcon} alt = "img" style={{width: "12px"}}></img>New Table</button>
        </div>

      <div className="heading">
        <h2>All Tables</h2>
        {tableData.map((table) => (
          <SavedTable table={table} />
        ))}
      </div>
      <div className="heading">
        <h2>Saved Queries</h2>
        {savedQueries &&
          savedQueries.map((query) => {
            return (
            <div className="saved-outer">
              <div
                className="saved-outer-name"
                onClick={() => onSavedQueryClick(query)}
              >
                {query.name}
              </div>
              <button className="image-button" onClick={() => handleDelete(query)}>
                <img src={deleteIcon} alt = "img" style={{ width: "15px" }} />
              </button>
            </div>
            )
          })}
      </div>
    </div>
  );
};
