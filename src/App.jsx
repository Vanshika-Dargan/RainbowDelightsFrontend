// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup/Signup';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import CakeCustomization from './components/CakeCustomization/CakeCustomization';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/customize" element={<CakeCustomization />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element = {
            <>
              <Landing />
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
