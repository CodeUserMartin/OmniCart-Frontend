import Navbar from "../components/Navbar.jsx"
import CartItemCard from "../components/CartItemCard.jsx";

import { useState, useEffect } from "react";

import { getUserCart } from "../api/cartApi.js"

import { Link } from "react-router-dom";

const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const fetchCart = async () => {

      const response =
        await getUserCart();

      // console.log(response.data.data.finalCartItems);


      setCartItems(
        response.data.data.finalCartItems
      );
    };

    fetchCart();

  }, []);

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="flex flex-col gap-4 px-4 py-8">

        {/* Cart Content */}
        <div className=" mx-auto w-full rounded-lg text-white">

          {/* Cart title */}
          <h1 className="text-3xl font-bold text-black">My Shopping Cart</h1>

          {/* Cart items */}

          {cartItems.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No items in your cart. Start shopping something you’ll love 🛍️
            </p>
          )}
          {
            cartItems.map((item) => (

              <CartItemCard
                key={item.productId}
                name={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                image={item.productImg}
              />

            ))
          }

        </div>

        {/* Cart Total and Checkout Button Container */}
        <div className=" rounded-lg">

          {/* Cart Total */}
          <div className="rounded-lg flex flex-col">

            <div className="flex justify-between items-center mb-2 bg-black text-white py-6 px-4">
              <span className="text-lg font-semibold uppercase">
                Total Amount:
              </span>

              <span className="text-2xl font-bold">
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout" className="w-full">
              <button className={` text-white font-bold uppercase py-6 w-full rounded-md ${cartItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-(--accent-color) text-white"
                }`}>
                Proceed to Checkout
              </button>
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default CartPage