import "./App.css";
import TabBar from "./components/TabBar/TabBar";
import { SideBar } from "./components/SideBar/SideBar";
import { NavBar } from "./components/NavBar/NavBar";
import OutputDetails from "./components/Output/OutputDetails";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const { modal, toggleModalVal} = useContext(AppContext);

  return (
    <div className="App">
      <div className="main-outer">
        <SideBar />
        <div className="right-side">      
          {modal === true ? (
           <>
              <button onClick={() => toggleModalVal(false)} style={{fontSize: "20px", marginTop: "20px"}}>
                Back To Editor
              </button>
              <OutputDetails outputDetails={"data"}/>
            </>
          ) : (
            <> 
              <NavBar />
              <TabBar /> 
           </>       
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
