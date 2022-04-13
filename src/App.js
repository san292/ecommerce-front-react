import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Success from './pages/Success';

function App() {
  const user = false;
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
