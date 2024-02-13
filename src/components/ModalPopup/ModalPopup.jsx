import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import './ModalPopup.css';

const ModalPopup = ({ isOpen, onClose, product }) => {
  const [showCartModal, setShowCartModal] = useState(false);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-modal-color">
        <div className="flex">
          <div className="w-1/2">
            {/* Resize images */}
            <img src={product.img} alt={product.name} className="max-h-60 max-w-xs object-cover mx-auto" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-extrabold colorname">{product.name}</h2>
            <p className="mt-2 font-medium">{product.description}</p>
            <p className="mt-2 text-3xl font-extrabold font-color">{product.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center"
              onClick={() => setShowCartModal(true)}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 p-2"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        {showCartModal && <AddToCartModal product={product} onClose={() => setShowCartModal(false)} />}
      </div>
    </div>
  );
};

const AddToCartModal = ({ onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add the product and quantity to the cart
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    onClose(); // Close the modal after adding to cart
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h2 className="text-xl font-extrabold">Add {product.name} to Cart</h2>
        <div className="mt-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md font-medium"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 font-medium"
            onClick={handleAddToCart}
          >
            Add
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 font-medium"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;