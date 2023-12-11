import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Header' element={<Header/>} />
        {/* <Route path='Home' element={<Home/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
    
    );

}

export default App;
