import { useConfirmedOrders } from "../../hooks/useConfirmedOrders.js";
import { shipOrder } from "../../api/orderApi.js";
import { toast } from "react-hot-toast";

const ConfirmedOrders = () => {

    const {
        orders,
        setOrders,
        loading
    } = useConfirmedOrders();

    console.log(orders);

    if (loading) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    Confirmed Orders
                </h1>

                <p className="text-white">
                    Loading orders...
                </p>
            </div>
        );
    }

    const handleShipOrder = async (itemId) => {

        try {

            await shipOrder(itemId);

            setOrders((prev) =>
                prev.filter(
                    (order) => order.itemId !== itemId
                )
            );

            toast.success(
                "Order Shipped Successfully!"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to ship order!"
            );
        }
    };

    return (
        <div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
                Confirmed Orders
            </h1>

            {/* Orders List */}
            <div className="flex flex-col gap-4">

                {   
                    orders.length === 0 ? (
                        <div className="bg-white p-4 rounded-lg">
                            No Confirmed Orders Found
                        </div>
                    ) : (
                        orders.map((order) => (

                            <div
                                key={order.itemId}
                                className="bg-white rounded-lg shadow p-4"
                            >

                                <div className="flex gap-4">

                                    {/* Product Image */}
                                    <div className="w-28 h-28 bg-gray-100 rounded overflow-hidden">

                                        <img
                                            src={order.productImage}
                                            alt={order.productName}
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    {/* Product Details */}
                                    <div>

                                        <h2 className="lg:text-xl font-bold">
                                            {order.productName}
                                        </h2>

                                        <p>
                                            Quantity: {order.quantity}
                                        </p>

                                        <p>
                                            Price: ₹{order.price}
                                        </p>

                                        <p className="text-green-600 font-semibold uppercase">
                                            {order.status}
                                        </p>

                                    </div>

                                </div>

                                <button
                                    onClick={() =>
                                        handleShipOrder(order.itemId)
                                    }
                                    className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-semibold"
                                >
                                    Ship Order
                                </button>

                            </div>

                        ))
                    )
                }

            </div>

        </div>
    );


};

export default ConfirmedOrders;
