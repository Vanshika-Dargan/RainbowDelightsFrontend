import React, { useState } from 'react';
import Card from './Card/Card';
import './Products.css';
import ProductsData from '../../ProductsData';
import ModalPopup from '../ModalPopup/ModalPopup';

const categories = ['All', 'Cakes', 'Biscuits', 'Breads', 'Chocolates', 'Others'];

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? ProductsData : ProductsData.filter(product => product.category === selectedCategory);

  return (
    <div className="mb-10">
      <h1 className="text-center mb-6 text-4xl font-semibold pt-4 colortext">Our Products</h1>
      
      {/* Category Filter Bar */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-white font-medium ${selectedCategory === category ? 'bg-red-500' : 'bg-gray-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((product) => (
          <div onClick={() => handleCardClick(product)} key={product.id}>
            <Card name={product.name} price={product.price} img={product.img} />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      <ModalPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
    </div>
  );
};

export default Products;