import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./config/reducers/cartslice";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-14">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase text-[#2d3a4b]">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="bg-gray-100 flex justify-center items-center h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full p-4"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      Price: ${item.price}{" "}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Subtotal:</strong> $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: item.id }))
                        }
                        disabled={item.quantity === 1}
                      >
                        −
                      </button>
                      <span className="text-base font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
                        onClick={() =>
                          dispatch(increaseQuantity({ id: item.id }))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="flex items-center gap-2 text-sm font-semibold py-1.5 px-3 rounded-md border-[1px] cursor-pointer hover:bg-[#2d3a4b] border-[#2d3a4b] bg-[#ffff] hover:text-[#ffff] transition-all duration-300"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <FaTrash className="text-sm" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-end">
            <h2 className="text-2xl font-bold text-[#2d3a4b] uppercase">
              Total: ${total.toFixed(2)}
            </h2>
            <button className="mt-4 bg-[#2d3a4b] hover:bg-[#fff] cursor-pointer text-white hover:text-[#2d3a4b] border-[1px] border-[#2d3a4b] font-semibold px-6 py-3 rounded-xl transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
