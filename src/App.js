import logo from './logo.svg';
import './App.css';
import Navbar2 from './Navbar2';
import About from './About'
import Footer from './Footer';
import Home from './Home';
import Adventures from './Adventures'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   
    <div>
    <BrowserRouter>
    <Navbar2></Navbar2>
    <Routes>

   <Route path="/"  element={<Home/>}></Route>
   <Route path="/home"  element={<Home/>}></Route>
   <Route path="/Avengers"  element={<Home/>}></Route>
   <Route path="/adventures" element={<Adventures/>}></Route>
   <Route path="/about" element={<About/>}></Route>
 
   </Routes>
   <Footer></Footer>
    
    </BrowserRouter>
      
  
    </div>
    
  );
}

export default App;
