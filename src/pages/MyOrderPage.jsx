import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";

import { getUserOrders } from "../api/orderApi.js";

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

            case "Pending":
                return "bg-yellow-100 text-yellow-700";

            case "Shipped":
                return "bg-blue-100 text-blue-700";

            case "Delivered":
                return "bg-green-100 text-green-700";

            case "Cancelled":
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
                            key={order.productId}
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
                            <div>

                                <span
                                    className={`px-4 py-2 rounded-full font-medium ${getStatusStyle(order.status)}`}
                                >
                                    {order.status}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
};

export default MyOrderPage;