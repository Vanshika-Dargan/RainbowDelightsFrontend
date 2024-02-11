import React from "react";
import "./Card.css";
import cardImg from "../../../assets/cake2.png";
import './Card.css'

const Card = ({ name, price }) => {
  const isSeeMoreCard = name === "See More";

  if (isSeeMoreCard) {
    return (
      <div className="max-w-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-black relative">
        <img className="w-full scale-110" src={cardImg} alt={name} style={{ maxWidth: "100%", height: "100%" }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <a href="#"><span className="text-xl font-bold text-white">See More</span></a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-black">
      <div className="flex justify-center px-4 pt-4">
        <img className="w-full" src={cardImg} alt={name} style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl colorname">{name}</div>
          <div className="text-2xl colorprice">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
