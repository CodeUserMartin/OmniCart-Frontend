import Navbar from "../components/Navbar.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi.js";
import AddressSection from "../components/AddressSelection.jsx";
import { getUserAddresses } from "../api/authApi.js";
import { buyProduct } from "../api/orderApi.js";
import { toast } from "react-hot-toast";


const BuyNowPage = () => {
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    const { productId } = useParams();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    // Fetch product
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductById(productId);
                setProduct(res.data.data.product);
            } catch (error) {
                toast.error("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    // Fetch addresses
    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const res = await getUserAddresses();
                setAddresses(res.data.data);
            } catch (error) {
            }
        };

        fetchAddresses();
    }, []);

    // BUY NOW handler
    const handleBuyNow = async () => {
        try {
            if (!selectedAddress) {
                toast.error("Select address!");
                return;
            }

            const selected = addresses.find(
                (a) => a._id === selectedAddress
            );

            const shippingAddress = {
                addressLine: selected.addressLine,
                city: selected.city,
                state: selected.state,
                country: selected.country,
                pincode: selected.pincode,
                phone: selected.phone,
            };

            const payload = {
                quantity,
                shippingAddress,
                paymentMethod,
            };

            await buyProduct(productId, payload);

            toast.success("Order placed successfully!");
            navigate("/");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Buy failed"
            );
        }
    };

    const totalAmount = product ? product.price * quantity : 0;

    return (
        <>
            <Navbar />

            {loading ? (
                <div className="p-10">Loading...</div>
            ) : (
                <div className="bg-white rounded-lg shadow p-4 w-full mx-auto mt-6 px-4">
                    <h2 className="text-2xl font-bold mb-4">
                        Order Summary
                    </h2>


                    <div className="flex justify-between items-center gap-4 p-4">
                        <img
                            src={product?.images?.[0]}
                            alt={product?.name}
                            className="w-32 h-32 object-cover rounded"
                        />

                        <div>
                            <h3 className="font-bold text-xl">
                                {product?.name}
                            </h3>

                            <p>{product?.description}</p>

                            <p className="text-green-600 font-bold">
                                ₹{product?.price}
                            </p>
                        </div>
                        {/* Quantity */}
                        <div className="flex items-center gap-4 mt-4">

                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                className="bg-gray-200 px-4 py-2 rounded-lg text-xl"
                            >
                                −
                            </button>

                            <span className="font-semibold text-lg">
                                {quantity}
                            </span>

                            <button
                                onClick={() =>
                                    setQuantity((prev) =>
                                        Math.min(product.stock, prev + 1)
                                    )
                                }
                                className="bg-gray-200 px-4 py-2 rounded-lg text-xl"
                            >
                                +
                            </button>

                        </div>
                    </div>
                </div>
            )}

            {/* Address */}
            <div className="p-4">
                <AddressSection
                    addresses={addresses}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    setAddresses={setAddresses}
                />
            </div>

            {/* Payment */}
            <div className="bg-white p-4 rounded-lg mt-4">
                <h2 className="text-xl font-bold mb-3">
                    Payment Method
                </h2>

                <div className="space-y-2 p-4 flex flex-col item-center">
                    <label>
                        <input
                            type="radio"
                            value="cash_on_delivery"
                            className="m-2"
                            checked={paymentMethod === "cash_on_delivery"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="credit_card"
                            className="m-2"
                            checked={paymentMethod === "credit_card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Credit Card
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="debit_card"
                            className="m-2"
                            checked={paymentMethod === "debit_card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Debit Card
                    </label>
                </div>
            </div>

            {/* Total + Button */}
            <div className="p-6 sticky bottom-0 bg-gray-100">
                <div className="flex justify-between bg-black text-white py-4 px-4">
                    <span>Total:</span>
                    <span>₹{totalAmount}</span>
                </div>

                <button
                    onClick={handleBuyNow}
                    className="bg-(--accent-color) text-white w-full py-4 mt-2 rounded hover:bg-red-800 hover:cursor-pointer"
                >
                    Buy Now
                </button>
            </div>
        </>
    );
};

export default BuyNowPage;