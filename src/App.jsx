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
import Chatbox from "./components/Chatbox/Chatbox.jsx";
import CakeCustomization from './components/CakeCustomization/CakeCustomization';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/customize" element={<><Navbar /><CakeCustomization /><Footer /></>} />
          <Route path="/cart" element={<><Navbar /><ShoppingCart /><Footer /></>} />
          <Route path="/login" element={<><Login /></>} />
          {/* <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} /> */}
          <Route path="/orders" element={<><Navbar /><Orders /> <Footer /></>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/" element = {
            <>

              <Chatbox />
              <Navbar />
              <Landing />
              <Products />
              <Slider />
              <Footer />
            </>
          } />
        </Routes>
        
      </Router>
      </>
  );
}

export default App;
