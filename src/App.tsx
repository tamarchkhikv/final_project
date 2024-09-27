import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Counter from './pages/Counter';
import { store } from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />


      </Routes>

    </Provider>

  );
}

export default App;
