import React, { useState } from 'react';

import Card from './Card/Card';
import './Products.css';
import ProductsData from '../../ProductsData';
import ModalPopup from '../ModalPopup/ModalPopup';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="mb-10">
      <h1 className="text-center mb-6 text-4xl font-semibold pt-4 colortext">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {ProductsData.map((product) => (
          <div onClick={() => handleCardClick(product)} key={product.id}>
            <Card name={product.name} price={product.price} img={product.img} />
          </div>
        ))}
      </div>
      <ModalPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
    </div>
  );
};

export default Products;