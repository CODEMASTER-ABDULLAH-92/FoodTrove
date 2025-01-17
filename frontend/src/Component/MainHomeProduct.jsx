import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { asset } from "../assets/asset";

const MainHomeProduct = () => {
  const coed = useSelector((state) => state.populars.curr || "");
  const popular = useSelector((state) => state.populars.popular);
  const [category, setCategory] = useState("All");
  const [toggleImg, setToggleImg] = useState({}); // Track toggles per category

  const filterProduct = category === "All" 
    ? popular.slice(0,6)
    : popular.slice(0,6).filter((item) => item.category?.trim().toLowerCase() === category.toLowerCase());

  const handleCategoryClick = (item) => {
    setCategory(item);
    setToggleImg((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="px-[2vw] py-[6vh] sm:px-[4vw] lg:px-[7vw]">
      <h1 className="text-xl font-semibold text-center">Popular Products</h1>
      <p className="text-[#7a7a7a] text-center w-4/6 m-auto my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas
        ullam consequuntur incidunt illo earum reprehenderit numquam.
      </p>

      <div className="flex gap-2 justify-center flex-col sm:flex-row items-start">
        {/* Category Filters */}
        <div>
          <div className="mb-10 flex sm:flex-col flex-wrap flex-row gap-2">
            {["All", "Vegetables", "Fruit", "Bakery", "Snacks"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(item)}
                className={`flex cursor-pointer max-w-[306px] h-[40px] sm:h-[50px] rounded-md justify-between px-3 sm:px-7 items-center ${
                  category === item ? "bg-gray-300" : "bg-[#e9e9e9]"
                }`}
              >
                <p className={`text-[16px] font-semibold ${category === item ? "text-[#F53E32]" : "text-black"}`}>
                  {item}
                </p>
                <div className="max-w-6 max-h-4 overflow-hidden rounded-md">
                  <img
                    src={toggleImg[item] ? asset.redArr : asset.arrowArr} // Use per-category toggle state
                    className="sm:block hidden"
                    alt={`${item} Icon`}
                  />
                </div>
              </div>
            ))}
          </div>
          <img src={asset.jusiceside} className="sm:block hidden" alt="Side Banner" />
        </div>

        {/* Products Grid */}
        <div className="grid newGrid grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-[350px] items-center justify-center">
          {filterProduct && filterProduct.length > 0 ? (
            filterProduct.map((item) => (
              <div
                key={item._id}
                className="border flex flex-col py-4 min-w-[200px] justify-center items-center"
              >
                <Link to={`/productDetail/${item._id}`}>
                  <div className="px-2 relative flex justify-center items-center">
                    <img
                      src={item.image[0] || asset.placeholderImage} // Fallback image
                      className="object-contain object-center self-center"
                      alt={item.name || "Product Image"}
                    />
                    <div className="h-[30px] w-[30px] rounded-full border absolute right-[45%] bg-transparent -bottom-3 flex justify-center items-center">
                      <img
                        src={item.lockImg || asset.placeholderImage} // Fallback image
                        alt="Lock Icon"
                        className="ml-[5px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-3 items-center flex-col">
                    <p className="text-center text-[#777777] mt-4 text-[20px] font-light">
                      {item.category}
                    </p>
                    <div className="flex items-center">
                      {Array.isArray(item.starImage) && item.starImage.map((star, index) => (
                        <img src={star} key={index} className="w-4" alt="Star" />
                      ))}
                      <p className="text-center ml-3 mt-1">{item.statRate}</p>
                    </div>
                    <p className="text-[15px] w-[90%] m-auto text-center font-medium">
                      {item.name}
                    </p>
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-center text-[#F53E32] font-semibold text-[16px]">
                        {coed}
                        {item.price}
                      </p>
                      <p className="text-center text-[13px] text-[#7a7a7a] line-through">
                        {coed}
                        {item.oldPrice}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full mt-6">
              No products found for the selected category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHomeProduct;
