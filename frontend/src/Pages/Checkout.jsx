import React, { useState } from 'react';
import { selectDeliveryFee, selectFinalTotal, selectTotalAmount } from "../feacture/popular";
import { useSelector } from 'react-redux';
import { asset } from '../assets/asset';
import { Link } from 'react-router-dom';
import { allCountries } from '../assets/asset';
import { cities } from '../assets/asset';
const Checkout = () => {
  const popular = useSelector((state) => state.populars.popular);
  const cartItems = useSelector((state) => state.populars.cartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const deliveryFee = useSelector(selectDeliveryFee);
  const finalTotal = useSelector(selectFinalTotal);
  const [toggleborder, setToggleBorder] = useState({ delivery: "0", payment: "2", address: "8", customer: "5" });

  // Ensure totalAmount and deliveryFee are numbers, default to 0 if not valid
  const totalAmountValue = isNaN(totalAmount) ? 0 : parseFloat(totalAmount);
  const deliveryFeeValue = isNaN(deliveryFee) ? 0 : parseFloat(deliveryFee);
  const finalAmount = totalAmountValue + (totalAmountValue ? parseFloat(deliveryFeeValue.toFixed(2)) : 0.00);

  const handleToggle = (type, value) => {
    setToggleBorder((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="px-[2vw] sm:px-[4vw]  py-12 flex flex-col sm:flex-row  justify-start gap-6 items-start">
      {/* Left Div */}
      <div className="flex flex-col gap-6 w-full sm:w-[48%] lg:w-[60%]">
        <div className="max-w-full border-gray-300 rounded-md border-2 p-6 flex flex-col gap-3">
          <h1 className="py-2 px-2 text-xl font-medium">Summary</h1>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p>${totalAmountValue.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Delivery fee</p>
              <p> ${totalAmountValue ? deliveryFeeValue.toFixed(2) : "0.00"}</p>
            </div>
            <div className="flex justify-between border-t-2 py-2">
              <p className="text-gray-900 font-semibold">Total Amount</p>
              <p className="font-semibold">${finalAmount.toFixed(2)}</p>
            </div>
          </div>

          {/* Display Popular Items */}
          {popular.length > 0 && Object.keys(cartItems).length > 0 && (
            popular.map((item) => {
              const quantity = cartItems[item._id];

              if (quantity > 0) {
                return (
                  <div key={item._id} className="flex gap-2">
                    <img src={item.image[0]} className="w-[80px]" alt="" />
                    <div className="flex flex-col space-y-2">
                      <h1>{item.name.slice(0, 20)}</h1>
                      <div className="flex gap-[5px]">
                        {item.starImage.map((star, index) => (
                          <img src={star} key={index} alt="" />
                        ))}
                      </div>
                      <div className="flex justify-start items-end gap-1">
                        <p className="text-center text-[#64B496] font-semibold text-[20px]">
                          {item.price}
                        </p>
                        <p className="text-center text-[14px] text-[#7a7a7a] line-through">
                          {item.oldPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })
          )}
        </div>

        {/* Delivery Method */}
        <div className="max-w-full mt-4 w-full rounded-md border-gray-300 border-2 p-6 flex gap-4 flex-col">
          <h1 className="py-1 px-2 text-xl font-medium">Delivery Method</h1>
          <p className="px-2 pt-1 text-[14px] text-gray-500">Please select the preferred shipping method to use on this order.</p>

          <div className="flex flex-col gap-4">
            {/* Shipping Options */}
            <div className="flex justify-between items-center text-gray-500">
              <div>
                <h1>Free Shipping</h1>
                <div className="flex items-center gap-2 justify-start">
                  <div className={`${toggleborder.delivery === "0" ? 'border-[2px] border-[#F53E32]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("delivery", "0")}>
                    <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.delivery === "0" ? 'bg-[#F53E32]' : ''}`}></div>
                  </div>
                  <h1>Rate - $0.00</h1>
                </div>
              </div>

              <div>
                <h1>Flat Rate</h1>
                <div className="flex items-center gap-2 justify-start">
                  <div className={`${toggleborder.delivery === "1" ? 'border-[2px] border-[#F53E32]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("delivery", "1")}>
                    <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.delivery === "1" ? 'bg-[#F53E32]' : ''}`}></div>
                  </div>
                  <h1>Rate - $5.00</h1>
                </div>
              </div>
            </div>
          </div>

          <p className='text-gray-500 pl-2'>Add Comment About Your Orders</p>
          <textarea className='max-w-full resize-none outline-none p-2 overflow-scroll border-gray-400 rounded-md border-2' placeholder="Add your comment here"></textarea>
        </div>

        {/* Payment Method */}
        <div className="max-w-full mt-4 w-full rounded-md border-gray-300 border-2 p-6 flex flex-col">
          <h1 className="py-1 px-2 text-xl font-medium">Payment Method</h1>
          <p className="px-2 pt-1 text-[14px] text-gray-500">Please select the preferred payment method to use on this order.</p>

          <div className="flex flex-col gap-4">
            {/* Payment Options */}
            <div className="flex items-center gap-2 justify-start text-gray-500">
              <div className={`${toggleborder.payment === "2" ? 'border-[2px] border-[#F53E32]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("payment", "2")}>
                <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.payment === "2" ? 'bg-[#F53E32]' : ''}`}></div>
              </div>
              <h1>Cash On Delivery</h1>
            </div>
            <div className="flex items-center gap-2 justify-start text-gray-500">
              <div className={`${toggleborder.payment === "3" ? 'border-[2px] border-[#F53E32]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("payment", "3")}>
                <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.payment === "3" ? 'bg-[#F53E32]' : ''}`}></div>
              </div>
              <h1>UPI</h1>
            </div>
            <div className="flex items-center gap-2 justify-start text-gray-500">
              <div className={`${toggleborder.payment === "4" ? 'border-[2px] border-[#F53E32]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("payment", "4")}>
                <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.payment === "4" ? 'bg-[#F53E32]' : ''}`}></div>
              </div>
              <h1>Bank Transfer</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Div */}
      <div className='w-full '>
        <div className="w-full border-gray-300 rounded-md border-2 p-6 flex flex-col gap-3">
          <h1 className='text-3xl font-medium'>New <br /> Customer</h1>
          <div className='flex gap-4 flex-wrap'>
            <div className="flex items-center gap-2 justify-start text-gray-500 px-2 py-2">
              <div className={`${toggleborder.customer === "5" ? 'border-[2px] border-[#64B496]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("customer", "5")}>
                <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.customer === "5" ? 'bg-[#64B496]' : ''}`}></div>
              </div>
              <h1>Register Account</h1>
            </div>
            <div className="flex items-center gap-2 justify-start text-gray-500 px-2 py-2">
              <div className={`${toggleborder.customer === "6" ? 'border-[2px] border-[#64B496]' : 'border-[2px] border-gray-500'} rounded-full p-[2px]`} onClick={() => handleToggle("customer", "6")}>
                <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.customer === "6" ? 'bg-[#64B496]' : ''}`}></div>
              </div>
              <h1>Guest Account</h1>
            </div>
          </div>

          <p className='text-gray-500'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
          <button className='px-5 py-3 text-xl font-medium text-white bg-[#F53E32] rounded-md max-w-[160px]'>Continue</button>

          <h1 className='text-3xl py-2 font-medium'>Returning Customer</h1>
          <label htmlFor="email" className='text-xl font-medium flex flex-col gap-2'>
            Email Address
            <input type="email" placeholder='Enter Your Email Address' id="email" className='outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85' />
          </label>
          <label htmlFor="password" className='text-xl font-medium flex flex-col gap-2'>
            Password
            <input type="password" placeholder='Enter Your Password' id="password" className='outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85' />
          </label>

          <div className='flex justify-start items-center gap-5'>
            <button className='px-5 py-3 text-xl font-medium text-white bg-[#F53E32] rounded-md max-w-[130px]'>Login</button>
            <Link to="" className="text-xl text-gray-500 underline">Forget Password</Link>
          </div>
        </div>




        <div className="w-full mt-4 border-gray-300 rounded-md border-2 p-6 flex flex-col gap-3">
  {/* Section Header */}
  <h1 className="text-3xl font-medium">Billing Details</h1>
  <p className="text-gray-600">Checkout Options</p>

  {/* Toggle Options */}
  <div className="flex gap-4 flex-wrap">
    {/* Option 1 */}
    <div className="flex items-center gap-2 justify-start text-gray-500 px-2 py-2">
      <div
        className={`${toggleborder.customer === "5" ? "border-[2px] border-[#64B496]" : "border-[2px] border-gray-500"} rounded-full p-[2px]`}
        onClick={() => handleToggle("customer", "5")}
      >
        <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.customer === "5" ? "bg-[#64B496]" : ""}`}></div>
      </div>
      <h1>I want to use an existing address</h1>
    </div>

    {/* Option 2 */}
    <div className="flex items-center gap-2 justify-start text-gray-500 px-2 py-2">
      <div
        className={`${toggleborder.customer === "6" ? "border-[2px] border-[#64B496]" : "border-[2px] border-gray-500"} rounded-full p-[2px]`}
        onClick={() => handleToggle("customer", "6")}
      >
        <div className={`h-[13px] w-[13px] rounded-full ${toggleborder.customer === "6" ? "bg-[#64B496]" : ""}`}></div>
      </div>
      <h1>I want to use the new address</h1>
    </div>
  </div>

  {/* Name Inputs */}
  <div className="flex justify-between items-center gap-2">
    <label htmlFor="firstName" className="text-xl font-medium flex-1 flex flex-col gap-2">
      First Name*
      <input
        type="text"
        placeholder="Enter Your First Name"
        id="firstName"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      />
    </label>
    <label htmlFor="lastName" className="text-xl font-medium flex-1 flex flex-col gap-2">
      Last Name*
      <input
        type="text"
        placeholder="Enter Your Last Name"
        id="lastName"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      />
    </label>
  </div>

  {/* Address Input */}
  <label htmlFor="address" className="text-xl font-medium flex-1 flex flex-col gap-2">
    Address*
    <input
      type="text"
      placeholder="Enter Your Address"
      id="address"
      className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
    />
  </label>

  {/* City and Post Code */}
  <div className="flex justify-between items-center gap-2">
    <label htmlFor="city" className="text-xl font-medium flex-1 flex flex-col gap-2">
      City*
      <select
        id="city"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      >
        {cities.map((item, index) => (
          <option key={index} value={item} className="text-black">
            {item}
          </option>
        ))}
      </select>
    </label>
    <label htmlFor="postCode" className="text-xl font-medium flex-1 flex flex-col gap-2">
      Post Code*
      <input
        type="number"
        placeholder="Post Code"
        id="postCode"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      />
    </label>
  </div>

  {/* Country and Region/State */}
  <div className="flex justify-between items-center gap-2">
    <label htmlFor="country" className="text-xl font-medium flex-1 flex flex-col gap-2">
      Country*
      <select
        id="country"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      >
        {allCountries.map((item, index) => (
          <option key={index} value={item} className="text-black">
            {item}
          </option>
        ))}
      </select>
    </label>
    <label htmlFor="region" className="text-xl font-medium flex-1 flex flex-col gap-2">
      Region/State*
      <input
        type="text"
        placeholder="Region/State"
        id="region"
        className="outline-none rounded-md px-3 py-3 border-[2px] border-gray-400/85"
      />
    </label>
  </div>
</div>

        <div className="flex justify-end">
  <button className="px-5 py-3 mt-4 text-xl font-medium text-white bg-[#F53E32] rounded-md max-w-[160px]">
Place Order
  </button>
</div>


      </div>
      
    </div>
  );
};

export default Checkout;
