import React, { useContext, useState } from "react";
import "./SideBar.css";
import { AppContext } from "../../context/AppContext";
import { addIcon, deleteIcon } from "../../assets/images";
import { SavedTable } from "./SavedTable";
import { allTable } from "../../dummyTable";
import DataBasesDropdown from "./DataBases";

export const SideBar = () => {
  const {
    tabs,
    addTab,
    savedQueries,
    updateActiveTab,
    saveQuery,
    toggleModalVal,
  } = useContext(AppContext);
  const [tableData, setTableData] = useState(allTable);

  const onSavedQueryClick = (query) => {
    toggleModalVal(false);
    let found = 0;
    let currTab = {};
    for (let tab in tabs) {
      if (tabs[tab].queryId === query.queryId) {
        found = 1;
        currTab = tabs[tab];
        break;
      }
    }

    if (!found) {
      const currNew = {
        ...query,
        outputDetails: [],
      };
      addTab(currNew);
      updateActiveTab(currNew);
    } else {
      updateActiveTab(currTab);
    }
  };

  const addTableClick = () => {
    setTableData([
      ...tableData,
      {
        name: "user",
      },
    ]);
  };

  const handleDelete = (query) => {
    const newSavedQuery = savedQueries.filter(
      (c) => c.queryId !== query.queryId
    );
    saveQuery(newSavedQuery);
  };

  return (
    <div className="side-bar-outer-box">
      <div>
        <DataBasesDropdown />
      </div>
      <div>
        <button className="add-new-button" onClick={() => addTableClick()}>
          <span>New Table</span>
          <img src={addIcon} alt="img" style={{ width: "14px" }}></img>
        </button>
      </div>
      <div className="heading">
        <h2>All Tables</h2>
        <div className="saved-outer">
          {tableData.map((table) => (
            <SavedTable table={table} />
          ))}
        </div>
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
                  <span> {query.name}</span>

                  <div
                    onClick={() => handleDelete(query)}
                  >
                    <img
                      src={deleteIcon}
                      alt="img"
                      style={{ width: "13px", height: "13px" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
