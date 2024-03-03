// ShoppingCart.jsx
import React from 'react';
import CartCard from './CartCard/CartCard';
import ProductsData from '../../CartProductsData';
import './ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-5xl font-medium mb-4 text-color">Your Cart</div>
      {ProductsData.map(product => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShoppingCart;
