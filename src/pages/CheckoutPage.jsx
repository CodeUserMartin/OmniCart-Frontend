import AddressSection from "../components/AddressSelection.jsx";
import Navbar from "../components/Navbar.jsx"

import { useState, useEffect } from "react";

import { getUserCart } from "../api/cartApi.js"
import { getUserAddresses } from "../api/authApi.js"

import { placeOrder } from "../api/orderApi.js"

import { toast } from "react-hot-toast"

import { useNavigate } from "react-router-dom";

import OrderSummaryItem from "../components/OrderSummaryItem.jsx";

const CheckoutPage = () => {

    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchCart = async () => {

            const response =
                await getUserCart();

            setCartItems(
                response.data.data.finalCartItems
            );
        };

        fetchCart();

    }, []);


    {/* Fetch user addresses on component mount */ }
    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const res = await getUserAddresses();
                setAddresses(res.data.data);

            } catch (error) {
                toast.error("Failed to load address")
            }
        };

        fetchAddresses();
    }, []);

    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);


    const handlePlaceOrder = async () => {
        try {
            if (!selectedAddress) {
                toast.error("Please select an address");
                return;
            }

            if (!paymentMethod) {
                toast.error("Please select a payment method");
                return;
            }

            const selected = addresses.find(
                (addr) => addr._id === selectedAddress
            );

            const shippingAddress = {
                addressLine: selected.address || selected.addressLine,
                city: selected.city,
                state: selected.state,
                country: selected.country,
                pincode: selected.pincode,
                phone: selected.phone
            };

            const payload = {
                shippingAddress,
                paymentMethod,
            };            

            const response = await placeOrder(payload);
            toast.success("Order placed successfully!");

            // STEP 1: clear frontend cart immediately
            setCartItems([]);

            // (safe cleanup)
            setSelectedAddress(null);

            
            setPaymentMethod("");

            // STEP 2: redirect user
            navigate("/");

        } catch (error) {
            toast.error("Order failed. Please try again.");
        }
    };


    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Wrapper */}
            <div className="flex flex-col gap-4 px-4 py-8">

                {/* Title */}
                <div>
                    <h1 className="text-xl lg:text-3xl font-bold text-center">Checkout Page</h1>
                </div>

                {/* Order Summary Container */}
                <div className=" shadow-(--box-shadow) p-4 rounded-lg max-h-76 overflow-y-auto scrollbar-none">
                    <h2 className="text-xl font-bold mb-2">Order Summary</h2>

                    {/* Order items would go here */}
                    {/* Cart items */}
                    {
                        cartItems.map((item) => (

                            <OrderSummaryItem
                                key={item.productId}
                                name={item.productName}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                                image={item.productImg}
                            />

                        ))
                    }

                </div>

                {/* Address Selection Container */}
                <AddressSection
                    addresses={addresses}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    setAddresses={setAddresses} />

                {/* Payment Method Container */}
                <div className="bg-white p-4 rounded-lg mt-4">

                    <h2 className="text-xl font-bold mb-3">
                        Payment Method
                    </h2>

                    <div className="space-y-2">

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="cash_on_delivery"
                                checked={paymentMethod === "cash_on_delivery"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cash on Delivery
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="credit_card"
                                checked={paymentMethod === "credit_card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Credit Card
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="debit_card"
                                checked={paymentMethod === "debit_card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Debit Card
                        </label>

                    </div>
                </div>


            </div>

            {/* Cart Total and Checkout Button Container */}
            <div className=" rounded-lg p-6 sticky bottom-0 bg-gray-100">

                {/* Cart Total */}
                <div className="rounded-lg flex flex-col">

                    <div className="flex justify-between items-center mb-2 bg-black text-white py-6 px-4">
                        <span className="text-lg font-semibold uppercase">Total Amount:</span>
                        <span className="text-2xl font-bold">
                            ₹{totalAmount.toFixed(2)}
                        </span>
                    </div>
                    {/* Checkout Button */}
                    <button
                        onClick={handlePlaceOrder}
                        className="bg-(--accent-color) text-white font-bold uppercase py-6 w-full rounded-md hover:bg-red-800 hover:cursor-pointer">Proceed to Checkout</button>
                </div>

            </div>

        </>
    )
}

export default CheckoutPage;