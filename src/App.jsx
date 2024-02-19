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
        <Routes>
          <Route path="/cart" element={<><Navbar /><ShoppingCart /><Footer /></>} />
          <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} />
          <Route path="/orders" element={<><Navbar /><Orders /><Footer /></>} />
          <Route path="/admin" element={<><Admin /></>} />
          <Route path="/" element = {
            <>
              <Navbar />
              <Hero />
              <Products />
              <Slider />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
  );
}

export default App;