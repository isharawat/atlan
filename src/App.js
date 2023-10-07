import { useState } from 'react';
import './App.css';
import Editor from './components/MainEditor';
import TabBar from './components/TabBar';

function App() {
  

  // const [editors, setEditors] = useState([
  //   <Editor/>,
  //   <Editor />
  // ])
  // const createEditor = () => {
  //   setEditors([...editors, <Editor/>]);
  // };

  return (
    <div className='App'>
      <TabBar/>
      {/* <Editor/>
      <h5>SQL Query Editor</h5>
      {editors.map(editor => editor)}
      <button onClick={ createEditor }>add editor</button> */}
    </div>
  );
}

export default App;
