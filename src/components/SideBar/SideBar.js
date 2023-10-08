import React, { useContext } from "react";
import "./SideBar.css";
import { AppContext } from "../../context/AppContext";
import { deleteIcon } from "../../assets/images";
import { data1, data2 } from "../../dummyData";
import { SavedTable } from "./SavedTable";

export const SideBar = () => {
  const {tabs, addTab, savedQueries, updateActiveTab, saveQuery,} = useContext(AppContext);

  console.log(savedQueries);
  const allTable = [
    {
      name: "public.name",
      data: data1,
    },
    {
      name: "public.country",
      data: data2,
    },
    {
      name: "public.user",
      data: data1,
    },
  ];
  const onSavedQueryClick = (query) => {
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
  const handleDelete = (query) => {
    const newSavedQuery = savedQueries.filter(
      (c) => c.queryId !== query.queryId
    );
    saveQuery(newSavedQuery);
  };

  return (
    <div className="side-bar-outer-box">
      <div className="heading">
        <h2>All Tables</h2>
        {allTable.map((table) => (
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
