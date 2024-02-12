import React from 'react';
import "./Hero.css"
import Image from '../../assets/cake1.png';

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-2 ">
      
      <div className="flex flex-col md:flex-row items-stretch justify-center rounded-lg shadow-xl mx-2 md:mx-12 md:my-4 w-full md:max-w-6xl lg:max-w-7xl my-5 left-section">
        
        <div className="flex-grow flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-8 py-1 md:py-2">
          
          <h1 className="text-3xl md:text-4xl font-semibold py-2 texthead">
            Lorem ipsum dolor sit
          </h1>
          
          <p className="text-base md:text-lg text-black font-semibold">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          
          <button className="bg-red-500 text-white rounded-lg px-6 py-2 mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 home-button font-semibold">
            Explore more
          </button>
        </div>
        
        <div className="flex-grow h-full">
          <img
            src={Image}
            alt="Delicious cake"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;