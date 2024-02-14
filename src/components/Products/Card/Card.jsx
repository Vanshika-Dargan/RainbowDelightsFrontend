import React from "react";
import "./Card.css";

// Card component for displaying individual product details
const Card = ({ name, price, img }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-300 cursor-pointer">
      <div className="flex justify-center items-center p-4">
        <img className="w-56 h-56 object-cover" src={img} alt={name} />
      </div>
      <div className="pb-4 pl-4 pr-4 flex justify-between">
        <h3 className="font-semibold text-xl colorname">{name}</h3>
        <p className="text-lg font-bold colorprice">${price}</p>
      </div>
    </div>
  );
};

export default Card;
