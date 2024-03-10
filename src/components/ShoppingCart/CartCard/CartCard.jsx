// CartCard.jsx
import React, { useState } from 'react';
import './CartCard.css';

const CartCard = ({ product, updateQuantity, removeFromCart }) => {
  // Set initial state for quantity from the product prop
  const [quantity, setQuantity] = useState(product.quantity);

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity); // Update quantity in parent component
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) { // Prevents quantity from going below 1
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity); // Update quantity in parent component
    }
  };

  // Function to handle removing the product from cart
  const handleRemove = () => {
    removeFromCart(product.id); // Remove product from cart in parent component
  };

  // Calculate the subtotal
  const subtotal = quantity * product.price;

  return (
    <div className="flex justify-between items-center bg-card-color p-4 shadow rounded-lg mb-3 mx-6 my-6 h-30">
      {/* Product Image */}
      <img src={product.img} alt={product.name} className="w-16 h-16 rounded-full" />

      {/* Product Details */}
      <div className="flex flex-col ml-4">
        <span className="text-lg font-medium">{product.name}</span>
        {product.piece && <span className="text-sm">Quantity: {product.piece} piece</span>}
        <span className="text-sm">Price: ${product.price.toFixed(2)}</span>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center border rounded">
        <button className="px-3 border-r text-lg bg-white" onClick={decrementQuantity}>-</button>
        <input type="text" value={quantity} className="w-12 text-center" readOnly />
        <button className="px-3 border-l text-lg bg-white" onClick={incrementQuantity}>+</button>
      </div>

      {/* Subtotal */}
      <div>
        <span className="text-lg">${subtotal.toFixed(2)}</span>
      </div>

      {/* Remove Button */}
      <button className="text-2xl text-red-500 hover:text-red-700" onClick={handleRemove}>&times;</button>
    </div>
  );
};

export default CartCard;
