import React from "react";
import "./NavBar.css";
import { useContext } from "react";
import OutputWindow from "../Output/OutputWindow";
import { AppContext } from "../../context/AppContext";
import { profileIcon, run, settingIcon } from "../../assets/images";

export const NavBar = () => {
  const { tabs, activeTab, updateActiveTab, updateTab} = useContext(AppContext);
  const active = tabs.filter((c) => c.queryId === activeTab.queryId);
  const { code, outputDetails } = active[0];

  const outputChange = async() => {
    const newCurrentTab = {
      ...activeTab,
      outputDetails: {}
    };
    updateTab(newCurrentTab);
  };

  const handleExport = () => {
    console.log(outputDetails);
  };

  if (!activeTab) {
    updateActiveTab(tabs[0]);
  }

  return (
    <>
      <div className="navbar-outer-box">
        <div className="inline " style={{ fontSize: "25px"}}>SQL EDITOR</div>       
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <OutputWindow />
        </div>             
        <div className="inline m-12">
              <div className="run-query-box"
              onClick={outputChange}
              disabled={!code}
            >
              <button className="color-green">
                <span >Run </span>
              <img src={run} width="10px" alt = "run"></img>
              </button>
            </div>
              <div className="run-query-box ">
              <button onClick={handleExport}>Export Data</button>
            </div>
            <div className="run-query-box ">
              <button onClick={handleExport}>Import Data</button>
            </div>
            <div className="run-query-box ">
            <img src={settingIcon} style={{width: "20px"}} alt = "settings"></img>
            </div>
            <div className="run-query-box ">
              <img src={profileIcon} style={{width: "20px"}} alt = "profile"></img>
            </div>
        </div>
      </div>
    </>
  );
};
