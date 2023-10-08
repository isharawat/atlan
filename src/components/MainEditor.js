import React, { useEffect, useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./Output/OutputWindow";
import OutputDetails from "./Output/OutputDetails.js";
import { data1 } from "../dummyData";
import { Editor } from "@monaco-editor/react";
import { AppContext } from "../context/AppContext";
const MainEditor = () => {
  const { tabs, activeTab, updateTab } = useContext(AppContext);
  const active = tabs.filter((c) => c.queryId === activeTab.queryId);
  const code = active[0].code;

  const outputDetails = active[0].outputDetails;
  const [processing, setProcessing] = useState(null);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const codeChange = (value) => {
    const newCurrentTab = {
      name: activeTab.name,
      queryId: activeTab.queryId,
      code: value,
      outputDetails: activeTab.outputDetails,
    };
    updateTab(newCurrentTab);
  };

  const outputChange = () => {
    const newCurrentTab = {
      name: activeTab.name,
      queryId: activeTab.queryId,
      code: activeTab.code,
      outputDetails: data1,
    };
    updateTab(newCurrentTab);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      // handleCompile();
    }
  }, [ctrlPress, enterPress]);

  const handleCompile = () => {
    setProcessing(true);
    outputChange();
    setProcessing(false);
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

        <div className="right-container">
          <div style={{ display: "grid", gridTemplateColumns: "4fr 2fr" }}>
            <OutputWindow />
            
            <div className="RunQueryBox" onClick={handleCompile} disabled={!code}>
               <button>{processing ? "Processing..." : "Run Query"}</button> 
            </div>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </div>
  );
};
export default MainEditor;
