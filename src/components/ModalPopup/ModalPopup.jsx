import React, { useState } from 'react';
import { FaCartPlus, FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; //provide react notifications
import { Tooltip } from 'react-tooltip' // provides tooltip for ingredients
import 'react-toastify/dist/ReactToastify.css';
import './ModalPopup.css';
import EggIcon from "../../assets/egg-svgrepo-com.svg";
import IceCreamIcon from "../../assets/icecream2-svgrepo-com.svg";
import ChocolateIcon from "../../assets/chocolate-svgrepo-com.svg";
import MilkIcon from "../../assets/milk-bottle-svgrepo-com.svg";
import SugarIcon from "../../assets/sugar-svgrepo-com.svg";
import WheatIcon from "../../assets/wheat-svgrepo-com.svg";
import Axios from "../../utils/Axios"
import Cookies from 'js-cookie';

const ModalPopup = ({ isOpen, onClose, product,addToCart,changeCount }) => {
  const [quantity, setQuantity] = useState(1);
  if (!isOpen || !product) return null;

  const handleAddToCart = () => { 
    const token = Cookies.get("jwt")
    if(!token){
      addToCart({...product,quantity})
    }else{
      Axios.post("cart/addCart",{productId:product.id,quantity:quantity},{
        withCredentials: true})
        .then((res)=>changeCount(res.data.count))
        .catch((err)=>console.log(err)) 
    }
    toast.success('Added to Cart!', {
      className: "toast-color",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
    setQuantity(1);//once the product added to cart quantity gets reinitialized to 1
    setTimeout(()=>onClose(),2000); // Close the modal after adding to cart
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
            <img src={product.image} alt={product.name} className="max-h-60 max-w-xs object-cover mx-auto" />
          </div>
          <div className="w-1/2 p-4">
            {product.piece && product.weight && <h2 className="text-2xl font-extrabold colorname">{product.name} - {product.piece} pieces ({product.weight}g)</h2>}
            {product.piece && !product.weight && <h2 className="text-2xl font-extrabold colorname">{product.name} - {product.piece} pieces</h2>}
            {!product.piece && product.weight && <h2 className="text-2xl font-extrabold colorname">{product.name} ({product.weight}g)</h2>}
            {!product.piece && !product.weight && <h2 className="text-2xl font-extrabold colorname">{product.name}</h2>}
            {/* Displays the ingredients */}
            <p className="mt-2 font-medium" >Ingredients:</p>
            {product.ingredients.map((image) =>{
            //  checks image and adds tooltip according to the image
             return (<img src={image} className='inline pr-2' data-tooltip-id="my-tooltip"
            data-tooltip-content={image === EggIcon ? "Egg" : image===MilkIcon ? "Milk" : image === WheatIcon ? "Wheat" :
            image === SugarIcon ? "Sugar" : image === ChocolateIcon ? "Coco" : image === IceCreamIcon ? "Ice Cream" : "none"}
                data-tooltip-place="top"/>);
            })}
            {/* Add tooltip to ingredients */}
            <Tooltip id="my-tooltip" />  
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
            <ToastContainer
            position="top-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
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
