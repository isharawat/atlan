import React, {useContext } from "react";
import { Editor } from "@monaco-editor/react";
import { AppContext } from "../../context/AppContext";

const MainEditor = () => {
  
  const { tabs, activeTab, updateTab} = useContext(AppContext);
  const active = tabs.filter((c) => c.queryId === activeTab.queryId);
  const {code} = active[0];

  const codeChange = (value) => {
    const newCurrentTab = {
      ...activeTab,
      code: value,
    };
    updateTab(newCurrentTab);
  };

  return (

    <div className = "outer">
      <Editor height = "60vh" value={code} onChange={codeChange} />
    </div>
  );
};

export default MainEditor;
