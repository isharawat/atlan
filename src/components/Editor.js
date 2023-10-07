import React, { useEffect, useState } from "react";
import Input from "./Input";
//import { classnames } from "../utils/general";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useKeyPress from "../hooks/useKeyPress";

import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails.js";
import { data1 } from "../dummyData";


const Editor = ({activeTab, tabs, setTabs}) => {
  const active = tabs.filter((c) => c.tabId == activeTab.tabId);
  const code = active.code;
  const outputDetails = active.outputDetails;
 // const [processing, setProcessing] = useState(null);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const codeChange = (e) => {
    const newtab = tabs.map((c) => {
      if (c.tabId === activeTab.tabId) {
        // Increment the clicked counter
        const newCurrentTab = {
          name: c.name,
          id: c.tabId,
          code: e.target.value,
          outputDetails: c.OutputDetails,
        }
        return newCurrentTab;
      } else {
        return c;
      }
    })
    setTabs(newtab);
  };
  const outputChange = () => {
    const newtab = tabs.map((c) => {
      if (c.tabId === activeTab.tabId) {
        // Increment the clicked counter
        const newCurrentTab = {
          name: c.name,
          id: c.tabId,
          code: c.code,
          outputDetails: data1,
        }
        return newCurrentTab;
      } else {
        return c;
      }
    })
    setTabs(newtab);
  };
  // useEffect(() => {
  //   if (enterPress && ctrlPress) {
  //     console.log("enterPress", enterPress);
  //     console.log("ctrlPress", ctrlPress);
  //     handleCompile();
  //   }
  // }, [ctrlPress, enterPress]);

  // const onChange = (action, data) => {
  //   switch (action) {
  //     case "code": {
  //       setCode(data);
  //       break;
  //     }
  //     default: {
  //       console.warn("case not handled!", action, data);
  //     }
  //   }
  // };


  // const handleEditorChange = (value) => {
  //   setValue(value);
  //   onChange("code", value);
  // };
  
  const handleCompile = () => {
    //setProcessing(true);
    outputChange();
    //setProcessing(false);
    // We will come to the implementation later in the code
  };



  // const checkStatus = async (token) => {
  //   // We will come to the implementation later in the code
  // };

  // const showSuccessToast = (msg) => {
  //   toast.success(msg || `Compiled Successfully!`, {
  //     position: "top-right",
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };
  // const showErrorToast = (msg) => {
  //   toast.error(msg || `Something went wrong! Please try again.`, {
  //     position: "top-right",
  //     autoClose: 1000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
              height="20vh"
              width={`100%`}
              value={code}
              defaultValue="// some comment"
              onChange={codeChange}
            />
            </div>
      </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <button
              onClick={handleCompile}
              disabled={!code}
            >
              {/* {processing ? "Processing..." :  */}
              "Compile and Execute"
              {/* } */}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  );
};
export default Editor;
