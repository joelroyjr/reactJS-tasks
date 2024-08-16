// import logo from './logo.svg';
import './App.css';
import {Home} from './Components/Home.js'
import {Contact} from './Components/Contact.js'
import {About} from './Components/About.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    <h1 class="heading">Welcome</h1>
    
    
    </>
  );
}

export default App;
