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

  const code = active[0].code;

  const outputDetails = active[0].outputDetails;
  const [processing, setProcessing] = useState(false);
  const codeChange = (value) => {
    const newCurrentTab = {
      name: activeTab.name,
      queryId: activeTab.queryId,
      code: value,
      outputDetails: activeTab.outputDetails,
    };
    updateTab(newCurrentTab);
  };

  let tablesLength = allTable.length;
  let p = Math.floor(Math.random() * tablesLength);

  const outputChange = () => {
    const newCurrentTab = {
      name: activeTab.name,
      queryId: activeTab.queryId,
      code: activeTab.code,
      outputDetails: allTable[p].data,
    };
    updateTab(newCurrentTab);
  };

  const handleExport = () => {
    console.log(outputDetails);
  };

  const handleCompile = () => {
    setProcessing(true);
    outputChange();
    setTimeout(() => setProcessing(false), 1000);
  };

  return (
    <div className="outer">
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
              height="40vh"
              width="100%"
              value={code}
              onChange={codeChange}
            />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <OutputWindow />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr"}}>
            <div
              className="run-query-box"
              onClick={handleCompile}
              disabled={!code}
            >
              <button className="color-green">
                {processing ? "Processing..." : "Run Query"}
              </button>
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
