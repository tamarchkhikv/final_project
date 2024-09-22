import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>

  );
}

export default App;
