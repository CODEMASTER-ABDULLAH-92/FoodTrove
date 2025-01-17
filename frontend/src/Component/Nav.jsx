import React, { useState, useEffect } from 'react';
import { asset } from '../assets/asset';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  // Effect to toggle body scroll
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto'; // Toggle scroll based on visibility
    return () => document.body.style.overflow = 'auto'; // Clean up on component unmount
  }, [visible]);

  const getSidebarClasses = () =>
    visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]';

  // Handle closing the sidebar when a link is clicked
  const handleLinkClick = () => {
    setVisible(false);
  };

  return (
    <div className="relative">
      <div className="shadow-md">
        <div className="px-[2vw] sm:px-[4vw] lg:px-[7vw]">
          <div className="flex justify-between items-center px-3 py-5">
            <img
              onClick={() => setVisible(!visible)}
              src={asset.burger}
              className="cursor-pointer"
              alt="Toggle Menu"
              aria-label="Toggle navigation menu"
              role="button"
            />
            <div>
              <ul className="flex nav flex-row gap-[16px] justify-center items-center">
                <NavLink className="text-[14px] font-medium" to="/Homeproduct" onClick={handleLinkClick}>Home</NavLink>
                <NavLink className="inline-flex justify-center items-center gap-1 text-[14px] cursor-pointer font-medium" to="/category" onClick={handleLinkClick}>
                  Category <img src={asset.down} alt="Dropdown" />
                </NavLink>
                <NavLink className="inline-flex justify-center items-center gap-1 text-[14px] cursor-pointer font-medium" to="/products" onClick={handleLinkClick}>
                  Products <img src={asset.down} alt="Dropdown" />
                </NavLink>
                <NavLink className="inline-flex justify-center items-center gap-1 text-[14px] cursor-pointer font-medium" to="/pages" onClick={handleLinkClick}>
                  Pages <img src={asset.down} alt="Dropdown" />
                </NavLink>
                <NavLink className="inline-flex justify-center items-center gap-1 text-[14px] cursor-pointer font-medium" to="/blog" onClick={handleLinkClick}>
                  Blog <img src={asset.down} alt="Dropdown" />
                </NavLink>
                <NavLink className="inline-flex justify-center items-center gap-1 text-[14px] cursor-pointer font-medium" to="/elements" onClick={handleLinkClick}>
                  Elements <img src={asset.down} alt="Dropdown" />
                </NavLink>
              </ul>
            </div>
            <div className="flex cursor-pointer gap-[2px]">
              <img src={asset.phone} alt="Phone" />
              <h1>+123 (456) (7890)</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setVisible(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`${getSidebarClasses()} min-w-[30vh] absolute z-30 top-0 transition-all duration-1000 min-h-full ease-in-out`}
      >
        <ul className="flex flex-col py-6 min-h-screen justify-start bg-red-200 items-center">
          <img
            src={asset.cross}
            className="w-6 mix-blend-color-burn self-end ml-6 cursor-pointer"
            onClick={() => setVisible(false)}
            alt="Close Sidebar"
            aria-label="Close sidebar"
            role="button"
          />
          <NavLink className="inline-flex text-[14px] justify-center items-center font-medium hover:bg-green-300 w-full h-12" to="/Homeproduct" onClick={handleLinkClick}>Home</NavLink>
          <NavLink className="inline-flex justify-center hover:bg-green-300 w-full h-12 items-center gap-1 text-[14px] cursor-pointer font-medium" to="/category" onClick={handleLinkClick}>
            Category <img src={asset.down} alt="Dropdown" />
          </NavLink>
          <NavLink className="inline-flex justify-center hover:bg-green-300 w-full h-12 items-center gap-1 text-[14px] cursor-pointer font-medium" to="/products" onClick={handleLinkClick}>
            Products <img src={asset.down} alt="Dropdown" />
          </NavLink>
          <NavLink className="inline-flex justify-center hover:bg-green-300 w-full h-12 items-center gap-1 text-[14px] cursor-pointer font-medium" to="/pages" onClick={handleLinkClick}>
            Pages <img src={asset.down} alt="Dropdown" />
          </NavLink>
          <NavLink className="inline-flex justify-center hover:bg-green-300 w-full h-12 items-center gap-1 text-[14px] cursor-pointer font-medium" to="/blog" onClick={handleLinkClick}>
            Blog <img src={asset.down} alt="Dropdown" />
          </NavLink>
          <NavLink className="inline-flex justify-center hover:bg-green-300 w-full h-12 items-center gap-1 text-[14px] cursor-pointer font-medium" to="/elements" onClick={handleLinkClick}>
            Elements <img src={asset.down} alt="Dropdown" />
          </NavLink>
          <NavLink className="flex justify-center hover:bg-green-300 w-full h-12 items-center" to="/cart" onClick={handleLinkClick}>
            <img src={asset.cart} alt="Cart" /> Cart
          </NavLink>
          <NavLink className="inline-flex justify-center cursor-pointer hover:bg-green-300 w-full h-12 items-center" to="/login" onClick={handleLinkClick}>
            <img src={asset.user} alt="Account" /> Account
          </NavLink>
          <NavLink className="flex justify-center hover:bg-green-300 w-full h-12 items-center" to="/wishlist" onClick={handleLinkClick}>
            <img src={asset.love} alt="WishList" /> WishList
          </NavLink>
        </ul>
      </div>

      {/* Main Content (Search Bar & Account Section) */}
      <div className="px-[2vw] lg:px-[7vw] flex justify-between items-center">
        <a href="/"><img src={asset.logo} className="log" alt="Logo" /></a>
        <div className="mm flex items-center w-full max-w-xl pl-2 border-2 border-[#64B496] rounded-md h-12">
          <input
            type="text"
            placeholder="Search For Items"
            className="text-[#7A7A7A] flex-grow outline-none h-full w-full px-2"
          />
          <div className="flex items-center sm:border-l-2 sm:border-[#64B496] px-2">
            <p className="hidden sm:block text-[#212529] text-[14px] min-w-[112px]">All Categories</p>
            <img className="hidden sm:block" src={asset.down} alt="Expand" />
          </div>
          <button
            className="h-full w-12 flex justify-center items-center bg-[#F53E32] rounded-r-md"
            aria-label="Search"
          >
            <img src={asset.search} className="w-4" alt="Search" />
          </button>
        </div>

        {/* User, Wishlist, Cart Icons */}
        <div className="flex justify-center items-center md:gap-4 logo lg:gap-9">
          <Link to="/login" className="flex justify-between cursor-pointer items-center">
            <img src={asset.user} alt="User" /> Account
          </Link>
          <p className="flex justify-between cursor-pointer items-center">
            <img src={asset.love} alt="Wishlist" /> WishList
          </p>
          <Link to="/cart">
          <p className="flex justify-between cursor-pointer items-center">
            <img src={asset.cart} alt="Cart" /> Cart
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
