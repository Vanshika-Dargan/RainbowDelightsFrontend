import React, { useState } from 'react';
import { FaCartPlus, FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import './ModalPopup.css';

const ModalPopup = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    onClose(); // Close the modal after adding to cart
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const subtotal = parseFloat(product.price) * quantity;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-modal-color">
        <div className="flex">
          <div className="w-1/2">
            <img src={product.img} alt={product.name} className="max-h-60 max-w-xs object-cover mx-auto" />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-extrabold colorname">{product.name}</h2>
            <p className="mt-2 font-medium">{product.description}</p>
            <p className="mt-2 text-3xl font-extrabold font-color">${product.price}</p>
            
            {/* Quantity and Subtotal Section */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <button className="h-10 w-10 flex justify-center items-center bg-gray-100 text-black rounded font-bold text-xl hover:bg-gray-200 border border-gray-300" onClick={decrementQuantity}>
                <FaMinus />
              </button>
              <input type="text" pattern="[0-9]*" value={quantity} onChange={handleQuantityChange} className="w-20 text-center border-2 border-gray-300 hover:bg-gray-50 rounded-md text-lg font-medium" />
              <button className="h-10 w-10 flex justify-center items-center bg-gray-100 text-black rounded font-bold text-xl hover:bg-gray-200 border border-gray-300" onClick={incrementQuantity}>
                <FaPlus />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-lg font-medium">Sub-total: ${subtotal.toFixed(2)}</p>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 flex items-center"
              onClick={handleAddToCart}
            >
              <FaCartPlus className="mr-2" />
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
      </div>
    </div>
  );
};

export default ModalPopup;
