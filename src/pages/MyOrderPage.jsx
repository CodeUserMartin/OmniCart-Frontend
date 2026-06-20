import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";

import { getUserOrders } from "../api/orderApi.js";
import { deliverOrder } from "../api/orderApi.js";
import { cancelOrder } from "../api/orderApi.js";
import toast from "react-hot-toast";

const MyOrderPage = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const res = await getUserOrders();

                console.log(res.data.data.finalOrder);

                setOrders(
                    res.data.data.finalOrder
                );

            } catch (error) {

                console.log(
                    "Failed to fetch orders",
                    error
                );

            } finally {

                setLoading(false);

            }

        };

        fetchOrders();

    }, []);

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

            console.log("CANCEL CLICKED ITEM ID:", itemId);

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

            console.log("FULL ERROR:", error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Failed to cancel order!"
            );
        }
    };

    const handleDeliverOrder = async (itemId) => {
        try {
            console.log("DELIVER CLICKED ITEM ID:", itemId);

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
            console.log("DELIVER ERROR:", error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Failed to mark as delivered!"
            );
        }
    };

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto p-4">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-6">
                    My Orders
                </h1>

                {/* Orders */}
                <div className="flex flex-col gap-4 shadow">

                    {orders.map((order) => (

                        <div
                            key={order.itemId}
                            className="bg-white rounded-lg shadow-(--box-shadow) p-4 flex items-center justify-between gap-4"
                        >

                            {/* Left Side */}
                            <div className="flex items-center gap-4">

                                {/* Image */}
                                <div className="w-28 h-28 rounded overflow-hidden">
                                    <img
                                        src={order.img}
                                        alt={order.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div>

                                    <h2 className="text-xl font-semibold">
                                        {order.name}
                                    </h2>

                                    <p className="text-gray-500">
                                        {order.description}
                                    </p>

                                    <p className="font-bold mt-2">
                                        ₹{order.price}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        Quantity: {order.quantity}
                                    </p>

                                </div>

                            </div>

                            {/* Status */}

                            <div className="flex flex-col gap-2 items-end">

                                <span
                                    className={`px-4 py-2 rounded-full font-medium ${getStatusStyle(order.status)}`}
                                >
                                    {order.status}
                                </span>

                                {(order.status === "pending" ||
                                    order.status === "confirmed") && (
                                        <button
                                            onClick={() => handleCancelOrder(order.itemId)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                                        >
                                            Cancel Order
                                        </button>
                                    )}

                                {order.status === "shipped" && (
                                    <button
                                        onClick={() => handleDeliverOrder(order.itemId)}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                                    >
                                        Mark As Delivered
                                    </button>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
};

export default MyOrderPage;