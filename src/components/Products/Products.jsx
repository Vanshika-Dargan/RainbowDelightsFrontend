// Products.js
import React from 'react'
import Card from './Card/Card'
import './Products.css'

const Products = () => {
  // Sample array of products
  const products = [
    { name: "Cupcake", price: "$4.99" },
    { name: "Muffin", price: "$3.99" },
    { name: "Cake Pop", price: "$2.99" },
    { name: "Donut", price: "$1.99" },
    { name: "Eclair", price: "$3.49" },
    { name: "Brownie", price: "$2.49" }
  ];

  // Ensure we only show up to 4 products, and the 5th card is "See More"
  const displayedProducts = products.slice(0, 4);
  const seeMoreNeeded = products.length > 4;

  return (
    <div className = "mb-5">
        <h1 className = "text-center mb-6 text-5xl colortext font-medium pt-4">Products</h1>
        <div className="flex flex-wrap justify-center gap-4">
        {displayedProducts.map((product, index) => (
            <Card key={index} name={product.name} price={product.price} />
        ))}
        {seeMoreNeeded && (
            <Card key="see-more" name="See More" price="#" />
        )}
        </div>
    </div>
  );
}

export default Products;
