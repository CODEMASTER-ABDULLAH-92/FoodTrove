import React from 'react';
import { asset } from '../assets/asset';
import Services from '../Component/Services'
const About = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-[9vw] text-white">
        <h1 className="text-lg font-semibold">About Us</h1>
        <p className="text-sm">Home &gt; About Us</p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row px-[2vw] sm:px-[4vw] gap-8 lg:px-[7vw] py-12">
        {/* Text Section */}
        <div className="flex flex-col w-full sm:w-[50%]">
          <h1 className="text-3xl font-bold pb-2">About the FoodTrove</h1>
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
            necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
            rerum quod. Tempora magni autem a voluptatibus neque.
          </p>
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
            necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
            rerum quod. Tempora magni autem a voluptatibus neque.
          </p>
          <p className="mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
            necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
            rerum quod. Tempora magni autem a voluptatibus neque.
          </p>

          {/* Statistics Section */}
          <div className="flex justify-between px-[2vw] bg-[#e9e9e9] rounded-md items-center py-4">
            <div className="text-center">
              <div className="text-[70px] font-semibold text-[#F53E32]">0.1<span className="text-[#7a7a7a] text-[26px]">k</span></div>
              <div className="text-[20px]">Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-[70px] font-semibold text-[#F53E32]">23<span className="text-[#7a7a7a] text-[26px]">k</span></div>
              <div className="text-[20px]">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-[70px] font-semibold text-[#F53E32]">2<span className="text-[#7a7a7a] text-[26px]">k</span></div>
              <div className="text-[20px]">Products</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[50%] mt-8 sm:mt-0 flex justify-center">
          <img src={asset.about} className="min-w-[50%] rounded-md" alt="About FoodTrove" />
        </div>
      </div>
        <Services/>
    </div>
  );
};

export default About;
