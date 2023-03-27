import './App.css';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </div>
  );
}

export default App;
