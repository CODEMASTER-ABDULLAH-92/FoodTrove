

import React from 'react';

const ThreeCards = ({ btn, img, heading, text, heading1, text1 }) => {
  return (
    <div className=" mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden relative">
      <div className="relative">
        {/* Image */}
        <img
          src={img}
          alt="Card background"
          className="w-full h-56 object-cover"
        />

        {/* Heading */}
        <h1 className="absolute sm:top-[10%] top-[8%] left-4 text-2xl font-semibold  text-black leading-tight drop-shadow-lg">
          {heading1} <br /> {heading}
        </h1>

        {/* Text */}
        <p className="absolute sm:top-[50%] top-[40%] left-4  text-black text-lg leading-relaxed drop-shadow-sm">
          <span className="text-[#F53E32] font-bold">{text1}</span> {text}
        </p>

        {/* Button */}
        <button className="absolute sm:top-[70%] top-[60%] left-4 px-4 py-2 text-sm font-bold rounded-md bg-[#F53E32]  text-white shadow-md hover:bg-[#D8342C] transition duration-200">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default ThreeCards;
