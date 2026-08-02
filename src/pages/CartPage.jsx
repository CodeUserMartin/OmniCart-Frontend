import Navbar from "../components/Navbar.jsx"
import CartItemCard from "../components/CartItemCard.jsx";

import { useState, useEffect } from "react";

import { getUserCart, deleteCartItem, decreaseCartItem, addToCart } from "../api/cartApi.js"

import { toast } from "react-hot-toast"

import { Link, useNavigate } from "react-router-dom";


const CartPage = () => {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {

    const fetchCart = async () => {

      const response =
        await getUserCart(selectedCategory);

      setCartItems(
        response.data.data.finalCartItems
      );

      console.log(cartItems);

    };

    fetchCart();

  }, [selectedCategory]);

  // Remove item from cart
  const handleDeleteItem = async (productId) => {
    try {

      await deleteCartItem(productId);

      setCartItems((prev) =>
        prev.filter(
          item => item.productId !== productId
        )
      );

      toast.success("Item removed from cart");

    } catch (error) {
      toast.error("Failed to remove item");
    }
  };


  {/* Increase item quantity in cart */ }
  const handleIncreaseQty = async (productId) => {
    try {

      const currentItem = cartItems.find(
        (item) => String(item.productId) === String(productId)
      );

      console.log("current ", currentItem);

      if (!currentItem) {
        return;
      }

      // Check if cart quantity has reached available stock
      if (currentItem.quantity >= currentItem.stock) {
        toast.error(
          `Only ${currentItem.stock} items are available in stock.`
        );
        return;
      }

      await addToCart(productId);

      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === productId
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        )
      );

    } catch (error) {
      toast.error("Failed to increase quantity");
    }
  };


  {/* Decrease item quantity in cart */ }
  const handleDecreaseQty = async (productId) => {
    try {

      const item = cartItems.find(
        item => item.productId === productId
      );

      if (!item) return;

      await decreaseCartItem(productId);

      if (item.quantity === 1) {

        // Backend removes the item
        setCartItems((prev) =>
          prev.filter(
            item => item.productId !== productId
          )
        );

      } else {

        setCartItems((prev) =>
          prev.map((item) =>
            item.productId === productId
              ? {
                ...item,
                quantity: item.quantity - 1
              }
              : item
          )
        );

      }

    } catch (error) {
      toast.error("Failed to decrease quantity");
    }
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Handle Checkout
  const handleCheckout = () => {

    const hasUnavailableItem = cartItems.some(
      (item) => !item.isActive
    );

    if (hasUnavailableItem) {
      toast.error(
        "Please remove unavailable items before proceeding to checkout."
      );

      return;
    }

    navigate("/checkout");
  };

  return (
    <>

      {/* Navbar */}
      <Navbar />

      {/* Wrapper */}
      <div className="flex flex-col gap-4 px-4 py-8">

        {/* Cart Content */}
        <div className=" mx-auto w-full rounded-lg text-white">

          <div className="flex justify-between items-center">

            <h1 className=" text-xl lg:text-3xl font-bold text-black">
              My Shopping Cart
            </h1>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white text-gray-700"
            >
              <option value="">All Products</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="groceries">Groceries</option>
            </select>

          </div>


          {/* Cart items */}

          {cartItems.length === 0 && (
            <p className="text-center text-gray-500 mt-7 relative text-xl ">
              No items in your cart. Start shopping something you’ll love 🛍️
            </p>
          )}

          <div className="p-2 m-2 h-110 overflow-y-auto scrollbar-none rounded-lg">

            {
              cartItems.map((item) => (

                <CartItemCard
                  key={item.productId}
                  productId={item.productId}
                  name={item.productName}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.productImg}
                  isActive={item.isActive}
                  onIncrease={handleIncreaseQty}
                  onDecrease={handleDecreaseQty}
                  onDelete={handleDeleteItem}
                />

              ))
            }
          </div>

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
            <button
              disabled={cartItems.length === 0}
              onClick={handleCheckout}
              className={
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed text-white font-bold uppercase py-6 w-full rounded-md"
                  : "bg-(--accent-color) text-white font-bold uppercase py-6 w-full rounded-md hover:bg-red-800 hover:cursor-pointer"
              }
            >
              Proceed to Checkout
            </button>
          </div>

        </div>

      </div>

    </>
  )
}

export default CartPage