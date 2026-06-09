import Navbar from "../components/Navbar.jsx"
import CardItemCard from "../components/CartItemCard.jsx"

const CartPage = () => {
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
          <CardItemCard />
          <CardItemCard />
          <CardItemCard />s

        </div>

        {/* Cart Total and Checkout Button Container */}
        <div className=" rounded-lg">

          {/* Cart Total */}
          <div className="rounded-lg flex flex-col">

            <div className="flex justify-between items-center mb-2 bg-black text-white py-6 px-4">
              <span className="text-lg font-semibold uppercase">Total Amount:</span>
              <span className="text-2xl font-bold">$0.00</span>
            </div>
            {/* Checkout Button */}
            <button className="bg-(--accent-color) text-white font-bold uppercase py-6 w-full rounded-md">Place Order</button>

          </div>

        </div>

      </div>

    </>
  )
}

export default CartPage