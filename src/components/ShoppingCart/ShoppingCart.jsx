// ShoppingCart.jsx
import React, { useState, useEffect } from 'react';
import CartCard from './CartCard/CartCard';
import ProductsData from '../../CartProductsData';
import './ShoppingCart.css';
import Axios from "../../utils/Axios"
import Cookies from 'js-cookie';

const ShoppingCart = ({addToCart, changeAddToCart, changeCount}) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const token = Cookies.get("jwt")
    if(!token){
      setProducts(prev=> [...addToCart])
    }else{
      Axios.get("cart/getCart",{
        withCredentials: true})
        .then((res)=>{
          changeCount(res.data.count)
          setProducts([...res.data.dataSet])
        })
    }
  },[])
  
  // Function to update quantity of a product
  const updateQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts([...updatedProducts]);
  };

  // Function to remove a product from cart
  const removeFromCart = (productId) => {
    const token = Cookies.get("jwt")
    if(!token){
      const updatedProducts = products.filter(product => product.id !== productId);
      setProducts([...updatedProducts]);   
      changeAddToCart(updatedProducts)
    }else{
      Axios.delete("cart/deleteCart?productId="+productId,{
        withCredentials: true})
        .then((res)=>{
          const updatedProducts = products.filter(product => product.id !== productId);
          changeCount(res.data.count)
          setProducts([...updatedProducts]);
        })
    }
  };

  // Calculate grand total
  const grandTotal = products.reduce((accumulator, product) => {
    return accumulator + (product.quantity * product.price);
  }, 0);

  return (
    <div className="container mx-auto p-6">
      <div className="text-5xl font-medium mb-4 text-color">Your Cart</div>
      {
        products.length==0?<p className='text-center text-slate-500'>No product is available</p>:
        products.map(product => (
          <CartCard 
            key={product.id} 
            product={product} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
          />
        ))
      }
      <div className="text-2xl font-semibold mt-4 flex justify-end">
        Grand Total: ${grandTotal.toFixed(2)}
      </div>
    </div>
  );
};

export default ShoppingCart;
