import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {

  
  return (
   
     <>
      <Navbar/>
     






      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
     </>
   
  );
}

export default App;
