import { useState } from 'react';
import './App.css';
import Editor from './components/MainEditor';
import TabBar from './components/TabBar';
import { SideBar } from './components/SideBar';

function App() {
  const [savedQuery, setSavedQuery] = useState([]);
  return (
    <div className='App'>
      <div className='MainOuter'>
        <SideBar savedQuery = {savedQuery} setSavedQuery = {setSavedQuery}/> 
        <TabBar savedQuery = {savedQuery} setSavedQuery = {setSavedQuery}/>
      </div>
      {/* <Editor/>
      <h5>SQL Query Editor</h5>
      {editors.map(editor => editor)}
      <button onClick={ createEditor }>add editor</button> */}
    </div>
  );
}

export default App;
