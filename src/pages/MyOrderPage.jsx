import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";

import { getUserOrders } from "../api/orderApi.js";
import { deliverOrder } from "../api/orderApi.js";
import { cancelOrder } from "../api/orderApi.js";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyOrderPage = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");


    useEffect(() => {

        const fetchOrder = async () => {

            try {

                const response =
                    await getUserOrders(selectedCategory);

                setOrders(response.data.data.finalOrder);
                console.log(response.data.data.finalOrder);


            } catch (error) {
                // toast.error("Failed to fetch orders")
            } finally {
                setLoading(false);
            }

        };

        fetchOrder();

    }, [selectedCategory]);


    const getStatusStyle = (status) => {

        switch (status) {

            case "pending":
                return "bg-yellow-100 text-yellow-700";

            case "shipped":
                return "bg-blue-100 text-blue-700";

            case "delivered":
                return "bg-green-100 text-green-700";

            case "cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="p-10 text-center">
                    Loading Orders...
                </div>
            </>
        );
    }

    const handleCancelOrder = async (itemId) => {

        try {

            await cancelOrder(itemId);

            // OPTION B (recommended): update status instead of removing
            setOrders((prev) =>
                prev.map((order) =>
                    order.itemId === itemId
                        ? { ...order, status: "cancelled" }
                        : order
                )
            );

            toast.success("Order cancelled successfully!");

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to cancel order!"
            );
        }
    };

    const handleDeliverOrder = async (itemId) => {
        try {

            await deliverOrder(itemId);

            setOrders((prev) =>
                prev.map((order) =>
                    order.itemId === itemId
                        ? { ...order, status: "delivered" }
                        : order
                )
            );

            toast.success("Order marked as delivered!");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to mark as delivered!"
            );
        }
    };

    // Formating Date
    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    };


    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto p-4">

                <div className="flex justify-between items-center gap-4">

                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-4">
                        My Orders
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


                {/* Orders */}
                <div className="flex flex-col gap-4 shadow">

                    {orders.length === 0 ? (
                        <p className="text-xl text-center font-bold mt-2 p-2">No Orders Found!!</p>
                    ) : (
                        orders.map((order) => (

                            <Link to={`/product/${order.productId}`}
                                key={order.itemId}
                                className="bg-white rounded-lg shadow-(--box-shadow) p-4 flex items-center justify-between gap-4"

                            >

                                {/* Left Side */}
                                <div className="flex flex-col md:flex-row lg:flex-row gap-4">

                                    {/* Image */}
                                    <div className="lg:w-28 lg:h-28 rounded overflow-hidden">
                                        <img
                                            src={order.img}
                                            alt={order.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div>

                                        <h2 className="text-sm lg:text-xl font-semibold">
                                            {order.name}
                                        </h2>

                                        <p className="text-gray-500 text-sm lg:text-lg mt-2 line-clamp-4">
                                            {order.description}
                                        </p>

                                        <p className="font-bold mt-2">
                                            ₹{order.price}
                                        </p>

                                        <p className="text-sm lg:text-lg text-gray-600">
                                            Quantity: {order.quantity}
                                        </p>

                                    </div>

                                </div>

                                {/* Status */}

                                <div className="flex flex-col gap-2 items-end self-end">



                                    <span
                                        className={`px-4 py-2 rounded-full font-medium text-sm lg:text-lg capitalize ${getStatusStyle(order.status)}`}
                                    >
                                        {order.status}
                                    </span>

                                    {(order.status === "pending" ||
                                        order.status === "confirmed") && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleCancelOrder(order.itemId);
                                                }}
                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs"
                                            >
                                                Cancel Order
                                            </button>
                                        )}

                                    {order.status === "shipped" && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleDeliverOrder(order.itemId);

                                            }}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs"
                                        >
                                            Mark As Delivered
                                        </button>
                                    )}

                                    <div>
                                        <span className="text-sm lg:text-lg">Ordered on : <br></br> {formatDate(order.createdAt)}</span>
                                    </div>

                                </div>


                            </Link>

                        ))
                    )}


                </div>

            </div>
        </>
    );
};

export default MyOrderPage;