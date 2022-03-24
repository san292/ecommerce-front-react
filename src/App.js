import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      {/* <Home>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/succes" element={<Succes />} />
        {/* <Route path="/" element= {<Home />} />   */}
      <Home />
    </div>
  );
}

export default App;
