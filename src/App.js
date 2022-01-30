import React from 'react'
import './App.css';

import NavBar from './components/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
