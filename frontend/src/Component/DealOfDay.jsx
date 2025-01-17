import React from 'react';
const DealOfDay = ({ cartImg, name, image, starImage, statRate, Brand, price, oldPrice }) => {
  return (
    <div className="h-[500px]">
      {/* Image Section */}
      <div className="relative w-full h-full">
       <img src={image} alt="" className='sm:h-[70%] h-[60%] w-full' />
        
        {/* Info Box */}
        <div className="absolute sm:top-[53%] top-[45%] left-[5%] w-[90%] max-h-[140px] bg-white rounded-md shadow-lg py-3">
          <h1 className="text-lg px-2  font-semibold">{name}</h1>
          <p className="text-sm  px-2 text-gray-500">{Brand}</p>
          <div className="flex items-center gap-2 mt-2">
            <img src={starImage} alt="star" className="w-5 h-5" />
            <p className="text-sm text-gray-700">{statRate}</p>
          </div>

          <div className='flex justify-between items-center overflow-hidden '>
          <div className="flex gap-2 mt-2">
            <span className="text-xl font-bold text-green-600">${price}</span>
            <span className="text-lg text-gray-400 line-through">${oldPrice}</span>
          </div>
          <div className='bg-[#F53E32] flex items-center gap-2 py-2 px-2 rounded-tl-xl rounded-br-xl top-2'>
            <img src={cartImg} alt="" />
            Cart
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfDay;




