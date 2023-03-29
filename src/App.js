import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainCampus from './components/MainCampus/MainCampus';
import Administration from './components/Administration/Administration';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <>
      <MainCampus />
      <Administration />
      <FAQ />
    </>
  );
}

export default App;
