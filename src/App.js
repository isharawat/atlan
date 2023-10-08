import "./App.css";
import TabBar from "./components/TabBar/TabBar";
import { AppContext, AppProvider } from "./context/AppContext";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="MainOuter">
          <SideBar />
          <TabBar />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
