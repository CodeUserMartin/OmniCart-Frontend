import { useDeliveredOrders } from "../../hooks/useDeliveredOrders.js";

const DeliveredOrders = () => {

    const {
        orders,
        loading
    } = useDeliveredOrders();

    if (loading) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    Delivered Orders
                </h1>

                <p className="text-white">
                    Loading orders...
                </p>
            </div>
        );
    }

    return (
        <div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
                Delivered Orders
            </h1>

            {/* Orders List */}
            <div className="flex flex-col gap-4 h-150 overflow-y-auto">

                {
                    orders.length === 0 ? (
                        <div className="bg-white p-4 rounded-lg">
                            No Delivered Orders Found
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

                                        <h2 className="text-xl font-bold">
                                            {order.productName}
                                        </h2>

                                        <p>
                                            Quantity: {order.quantity}
                                        </p>

                                        <p>
                                            Price: ₹{order.price}
                                        </p>

                                        <p className="text-green-600 font-semibold">
                                            {order.status}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))
                    )
                }

            </div>

        </div>
    );
};

export default DeliveredOrders;