import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart, addToCart } from "../feacture/popular";
import { Link } from "react-router-dom";
import { selectDeliveryFee, selectFinalTotal, selectTotalAmount } from "../feacture/popular";

const Cart = () => {
  const popular = useSelector((state) => state.populars.popular);
  const cartItems = useSelector((state) => state.populars.cartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const deliveryFee = useSelector(selectDeliveryFee);
  const finalTotal = useSelector(selectFinalTotal);

  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeToCart(id));
  };

  return (
    <div>
      {/* Header */}
      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-[9vw] text-white">
        <h1 className="text-lg font-semibold">Cart</h1>
        <p className="text-sm">Home &gt; Cart</p>
      </header>

      {/* Table Section */}
      <div className="px-[2vw] sm:px-[4vw] lg:px-[7vw] py-12">
        {popular.length > 0 && Object.keys(cartItems).length > 0 ? (
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b bg-[#e9e9e9]">
                <th className="py-2 px-4 text-left w-[15%]">Image</th>
                <th className="py-2 px-4 text-left w-[15%]">Category</th>
                <th className="py-2 px-4 text-center w-[15%]">Quantity</th>
                <th className="py-2 px-4 text-center w-[15%]">Price</th>
                <th className="py-2 px-4 text-center w-[15%]">Total</th>
                <th className="py-2 px-4 text-center w-[10%]">Remove</th>
              </tr>
            </thead>
            <tbody>
              {popular.map((item) => {
                const quantity = cartItems[item._id];
                if (quantity > 0) {
                  return (
                    <tr key={item._id} className="border-b">
                      <td className="py-2 px-4">
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="py-2 px-4">{item.category}</td>
                      <td className="py-2 px-4 text-center">
                        <button
                          className="border border-gray-500 px-2 rounded-sm"
                          onClick={() => handleAddToCart(item._id)}
                        >
                          +
                        </button>{" "}
                        {quantity}{" "}
                        <button
                          className="border border-gray-500 px-2 rounded-sm"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          -
                        </button>
                      </td>
                      <td className="py-2 px-4 text-center">${item.price}</td>
                      <td className="py-2 px-4 text-center">
                        ${(item.price * quantity)}
                      </td>
                      <td
                        className="py-2 px-4 text-center cursor-pointer text-red-500"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        X
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        )}

        {/* Navigation Links */}
        <div className="flex justify-between items-center mt-6">
          <Link to="/Homeproduct" className="underline text-blue-600">
            Continue Shopping
          </Link>
          <Link to="/checkout" className="bg-[#F53E32] text-white px-4 py-2 rounded">
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="p-4 border-t">
        <h2 className="text-xl font-bold">Cart Totals</h2>
        <div>
          <p>Subtotal: ${totalAmount}</p>
          <p>Delivery Fee: ${deliveryFee}</p>
          <p>Total: ${finalTotal}</p>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
          onClick={() => console.log("Proceed to Checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
