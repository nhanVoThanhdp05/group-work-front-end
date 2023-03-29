import './App.css';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Requirement from './components/Requirements/Requirement';

function App() {
  const title1 = "Hello";
  const displayNotification = () => {
    console.log("Click");
  }
  return (
    <div className="App">
      <Requirement />
    </div>
  );
}

export default App;
