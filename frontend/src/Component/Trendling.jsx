import React, { useEffect, useState } from "react";
import { popular } from "../assets/asset"; // Assuming 'popular' is an array of product data
import { Link } from "react-router-dom";

const Trendling = () => {
  const [newProducts, setNewProducts] = useState([]);

  // Filters for each product category
  const filteredTopSelling = popular.filter((item) => item.TopSelling);
  const filteredTopRated = popular.filter((item) => item.TopRated);
  const filteredRecentlyAdded = popular.filter((item) => item.RecentlAdded);
  const filteredTrending = popular.filter((item) => item.TrendingProducts);
  const allProducts = popular.filter(
    (item) =>
      item.TopRated ||
      item.TopSelling ||
      item.TrendingProducts ||
      item.RecentlAdded
  );

  useEffect(() => {
    // Set initial state to "all products"
    setNewProducts(allProducts);
  }, []);

  return (
    <div className="px-[2vw] sm:px-[4vw] lg:px-[7vw] py-12">
      {/* Divider */}
      <hr className="h-[3px] bg-gray-700" />

      {/* Navigation */}
      <div>
        <ul className="flex justify-end items-center gap-4 py-4">
          <li
            onClick={() => setNewProducts(allProducts)}
            className="hover:text-red-300 cursor-pointer"
          >
            All
          </li>
          <li
            onClick={() => setNewProducts(filteredTopRated)}
            className="hover:text-red-300 cursor-pointer"
          >
            Top Rated
          </li>
          <li
            onClick={() => setNewProducts(filteredTrending)}
            className="hover:text-red-300 cursor-pointer"
          >
            Trending
          </li>
          <li
            onClick={() => setNewProducts(filteredRecentlyAdded)}
            className="hover:text-red-300 cursor-pointer"
          >
            Recently Added
          </li>
          <li
            onClick={() => setNewProducts(filteredTopSelling)}
            className="hover:text-red-300 cursor-pointer"
          >
            Top Selling
          </li>
        </ul>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Section for Top Selling */}
        <div>
          <h1 className="text-3xl text-gray-800 font-semibold my-3">
            Top Selling
          </h1>
          <div className="border-b-2 border-[#3BB77E] w-[50px] mb-2"></div>
          {filteredTopSelling.map((item, index) => (
            <Link
              key={index}
              className="flex gap-4 items-center mb-4"
              to={`/productDetail/${item._id}`}
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div>
                <h1 className="font-semibold">{item.Info}</h1>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.starImage[0]}
                    alt="Rating"
                    className="w-4 h-4"
                  />
                  <p>{item.statRate}</p>
                </div>
                <div className="flex gap-2 items-end">
                  <span className="text-2xl text-[#3BB77E] font-semibold">
                    ${item.price}
                  </span>
                  <span className="line-through text-gray-500">
                    ${item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section for Top Rated */}
        <div>
          <h1 className="text-3xl text-gray-800 font-semibold my-3">
            Top Rated
          </h1>
          <div className="border-b-2 border-[#3BB77E] w-[50px] mb-2"></div>
          {filteredTopRated.map((item, index) => (
            <Link
              key={index}
              className="flex gap-4 items-center mb-4"
              to={`/productDetail/${item._id}`}
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div>
                <h1 className="font-semibold">{item.Info}</h1>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.starImage[0]}
                    alt="Rating"
                    className="w-4 h-4"
                  />
                  <p>{item.statRate}</p>
                </div>
                <div className="flex gap-2 items-end">
                  <span className="text-2xl text-[#3BB77E] font-semibold">
                    ${item.price}
                  </span>
                  <span className="line-through text-gray-500">
                    ${item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section for Recently Added */}
        <div>
          <h1 className="text-3xl text-gray-800 font-semibold my-3">
            Recently Added
          </h1>
          <div className="border-b-2 border-[#3BB77E] w-[50px] mb-2"></div>
          {filteredRecentlyAdded.map((item, index) => (
            <Link
              key={index}
              className="flex gap-4 items-center mb-4"
              to={`/productDetail/${item._id}`}
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div>
                <h1 className="font-semibold">{item.Info}</h1>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.starImage[0]}
                    alt="Rating"
                    className="w-4 h-4"
                  />
                  <p>{item.statRate}</p>
                </div>
                <div className="flex gap-2 items-end">
                  <span className="text-2xl text-[#3BB77E] font-semibold">
                    ${item.price}
                  </span>
                  <span className="line-through text-gray-500">
                    ${item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section for Trending */}
        <div>
          <h1 className="text-3xl text-gray-800 font-semibold my-3">
            Trending
          </h1>
          <div className="border-b-2 border-[#3BB77E] w-[50px] mb-2"></div>
          {filteredTrending.map((item, index) => (
            <Link
              key={index}
              className="flex gap-4 items-center mb-4"
              to={`/productDetail/${item._id}`}
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div>
                <h1 className="font-semibold">{item.Info}</h1>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.starImage[0]}
                    alt="Rating"
                    className="w-4 h-4"
                  />
                  <p>{item.statRate}</p>
                </div>
                <div className="flex gap-2 items-end">
                  <span className="text-2xl text-[#3BB77E] font-semibold">
                    ${item.price}
                  </span>
                  <span className="line-through text-gray-500">
                    ${item.oldPrice}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendling;
