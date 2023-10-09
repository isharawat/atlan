import React, { useState, useContext } from "react";
import OutputWindow from "./Output/OutputWindow";
import OutputDetails from "./Output/OutputDetails.js";
import { Editor } from "@monaco-editor/react";
import { AppContext } from "../context/AppContext";
import { allTable } from "../dummyTable";
import { resetIcon } from "../assets/images";

const MainEditor = () => {
  const { tabs, activeTab, updateTab, resetClick } = useContext(AppContext);
  const active = tabs.filter((c) => c.queryId === activeTab.queryId);
  const {code, outputDetails} = active[0];

  let tablesLength = allTable.length;
  let p = Math.floor(Math.random() * tablesLength);
  
  const codeChange = (value) => {
    const newCurrentTab = {
      ...activeTab,
      code: value,
    };
    updateTab(newCurrentTab);
  };
  const outputChange = () => {
    const newCurrentTab = {
      ...activeTab,
      outputDetails: allTable[p].data,
    };
    updateTab(newCurrentTab);
  };

  const handleExport = () => {
    console.log(outputDetails);
  };

  return (

    <div className="outer">
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <Editor height="40vh" width="100%" value={code} onChange={codeChange} />
      </div>
      <div className="right-container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <OutputWindow />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr" }}>
            <div
              className="run-query-box"
              onClick={outputChange}
              disabled={!code}
            >
              <button className="color-green">Run Query</button>
            </div>
            <div className="run-query-box ">
              <button onClick={handleExport}>Export Data</button>
            </div>
            <div className="run-query-box" onClick={resetClick}>
              <img
                src={resetIcon}
                alt="img"
                style={{
                  width: "20px",
                  backgroundColor: "#f3f3f3",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>
    </div>
  );
};

export default MainEditor;
