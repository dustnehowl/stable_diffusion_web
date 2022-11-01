import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Text2img from './components/Text2img';
import Img2img from './components/Img2img';
import Main from './components/Main';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="text2img" element={<Text2img />} />
        <Route path="img2img" element={<Img2img />} />
      </Routes>
    </>
  );
}

export default App;
