import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectDeliveryFee, selectFinalTotal } from "../feacture/popular"; // Import selectors only once

const Total = () => {
  const popular = useSelector((state) => state.populars.popular);
  const cartItems = useSelector((state) => state.populars.cartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const deliveryFee = useSelector(selectDeliveryFee);
  const finalTotal = useSelector(selectFinalTotal);

  return (
    <div className="cart-page p-6">
      <h1 className="text-3xl font-semibold mb-4">Your Total</h1>
      
      {/* Cart Items */}
      <div className="cart-items mb-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item flex justify-between items-center p-4 mb-2 border-b">
              <div className="item-details">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="item-price text-lg font-semibold">
                ${item.price.toFixed(2)}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>

      {/* Summary Section */}
      <div className="summary bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>

        {/* Subtotal Section */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-700">Subtotal:</span>
          <span className="text-lg font-semibold text-gray-900">${totalAmount.toFixed(2)}</span>
        </div>

        {/* Delivery Fee Section */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-700">Delivery Fee:</span>
          <span className="text-lg font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Total Section */}
        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="text-gray-700">Total Amount:</span>
          <span className="text-gray-900">${finalTotal.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Link to="/checkout">
          <button className="mt-6 bg-[#F53E32] text-white py-2 px-4 rounded-lg hover:bg-[#F53E32] focus:outline-none focus:ring-2 focus:ring-[#F53E32] focus:ring-opacity-50 w-full">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Total;

