import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
