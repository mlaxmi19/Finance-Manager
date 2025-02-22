import React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Auth/Login.js';
import Register from './Pages/Auth/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home.js';
import SetAvatar from './Pages/Avatar/setAvatar.js';



const App = () => {
  return (
    
      <div className="App" style={{backgroundColor:'grey'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;