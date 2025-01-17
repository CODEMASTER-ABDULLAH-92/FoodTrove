import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { useSelector } from 'react-redux';
import { parsePath, useLocation } from 'react-router-dom';

const Hero = () => {
  const categories = ['Shopping', 'Recips', 'Kitchen', 'News', 'Food'];
  const [count, setCount] = useState(0);
  const [homeImage,setHomeImage] = useState(false);
  const [visibility, setVisibility] = useState(
    categories.map(() => true) // Initialize visibility for all buttons
  );
const locattion = useLocation();
  const toggleVisibility = (index) => {
    setVisibility((prev) =>
      prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
    );
  };

  const toggleHero = () => {
    setCount((prevCount) => (prevCount === 0 ? 1 : 0)); // Toggle between 0 and 1
  };
  const isHomeProductPage = location.pathname.includes('/Homeproduct');

  return (
    <div className="relative">
      {count === 0  && (
        <div className="sm:flex gap-2 absolute flex-wrap top-24 hidden right-8 cursor-pointer transition-opacity duration-500 ease-in-out opacity-100">
          {categories.map((item, index) => (
            visibility[index] && (
              <div
                key={item}
                className="rounded-full bg-white text-green-400 px-6 py-3 max-w-40 flex gap-1 justify-center items-center transition-all duration-500"
              >
                <img
                  src={asset.crossIcon}
                  className="h-[10px] w-[10px] cursor-pointer"
                  onClick={() => toggleVisibility(index)} // Toggle visibility for this button
                  alt="Remove button"
                />
                <p className="hover:text-black">{item}</p>
              </div>
            )
          ))}
        </div>
      )}

      <div className="absolute z-20 top-[36%] sm:top-[50%] left-[10%] w-[30vh] sm:w-[70vh] transition-all duration-500 ease-in-out">
        <h1 className="text-xl font-bold">
          <span className="text-[#F53E32] mr-2 border-b-2 border-[#F53E32]">100%</span>
          Organic Vegetables
        </h1>
        <h1 className="md:text-4xl text-3xl font-bold text-black py-2">
          The Best Way to <br /> Stuff Your Wallet.
        </h1>
        <p className="text-xs text-balance">
          "Great food is a celebration of flavors, colors, <br /> and cultures. Every bite tells a story."
        </p>
        {count === 0 && locattion.pathname.includes('/Homeproduct') ? (
          <div className="h-[65px] flex mt-5 -ml-2">
          <input
            type="text"
            className="w-[292px] rounded-full outline-none border-none h-full px-4"
            placeholder="Your Email Address ..."
          />
          <div className="h-full -ml-[70px] text-white pt-5 bg-green-600 w-[157px] text-center rounded-full cursor-pointer transition-colors hover:bg-green-700">
            Subscribe
          </div>
        </div>
        ) :  (
          
          <button className="px-4 py-2 rounded-md bg-[#F53E32] mt-2 text-white transition-transform duration-300 hover:scale-105">
          Shop Now
        </button>
        )}
      </div>

      <div className="absolute bottom-4 left-[50%] flex gap-2">
        <div
          className={`h-4 w-4 rounded-full border-green-400 border-2 cursor-pointer transition-all duration-300 ${
            count === 0 ? 'bg-green-400' : 'bg-transparent'
          }`}
          onClick={toggleHero}
        ></div>
        <div
          className={`h-4 w-4 rounded-full border-green-400 border-2 cursor-pointer transition-all duration-300 ${
            count === 1 ? 'bg-green-400' : 'bg-transparent'
          }`}
          onClick={toggleHero}
        ></div>
      </div>

      
      <img
  src={
    (count === 0 || location.pathname.includes("/Homeproduct"))
      ? asset.section2
      : asset.section
  }
  alt="Hero"
  className="w-full min-h-[700px] object-cover object-top transition-all duration-700 ease-in-out"
/>
    </div>
  );
};

export default Hero;
