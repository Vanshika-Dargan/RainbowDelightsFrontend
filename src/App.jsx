// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Profile from './components/Profile/Profile';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element = {
            <>
              <Hero />
              <Products />
              <Slider />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
