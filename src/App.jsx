// App.jsx
import React, { useState } from 'react';
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
  const [addToCart,setAddToCart] = useState([]);
  const [countCart,setCountCart] = useState(0)

  const changeAddToCart = (data)=>{
    setAddToCart([data])
    setCountCart(addToCart.length+1)
  }

  const removeAddToCart = (data)=>{
    setAddToCart([...data])
    setCountCart(addToCart.length-1)
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/customize" element={<><Navbar countCart={countCart} addToCart={changeAddToCart} changeCount={setCountCart}/><CakeCustomization /><Footer /></>} />
          <Route path="/cart" element={<><Navbar countCart={countCart} addToCart={changeAddToCart} changeCount={setCountCart}/><ShoppingCart addToCart={addToCart} changeAddToCart={removeAddToCart} changeCount={setCountCart} /><Footer /></>} />
          <Route path="/login" element={<><Login/></>} />
          {/* <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} /> */}
          <Route path="/orders" element={<><Navbar countCart={countCart} addToCart={changeAddToCart} changeCount={setCountCart}/><Orders /> <Footer /></>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/" element = {
            <>

              <Chatbox />
              <Navbar countCart={countCart} addToCart={changeAddToCart} changeCount={setCountCart}/>
              <Landing />
              <Products addToCart={changeAddToCart} changeCount={setCountCart}/>
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
