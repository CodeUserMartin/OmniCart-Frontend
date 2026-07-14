import { usePendingOrders } from "../../hooks/usePendingOrders.js";
import { acceptOrder } from "../../api/orderApi.js";
import { toast } from "react-hot-toast";

const NewOrder = () => {


    const {
        orders,
        setOrders,
        loading
    } = usePendingOrders();

    if (loading) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    New Orders
                </h1>

                <p className="text-white">
                    Loading orders...
                </p>
            </div>
        );
    }

    const handleAcceptOrder = async (itemId) => {

        try {

            await acceptOrder(itemId);

            setOrders((prev) =>
                prev.filter(
                    (order) => order.itemId !== itemId
                )
            );

            toast.success(
                "Order Accepted Successfully!"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to accept order!"
            );
        }
    };

    return (
        <div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
                New Orders
            </h1>

            {/* Orders List */}
            <div className="flex flex-col gap-4">

                {
                    orders.length === 0 ? (
                        <div className="bg-white p-4 rounded-lg">
                            No Pending Orders Found
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

                                        <p className="text-yellow-600 font-semibold uppercase">
                                            {order.status}
                                        </p>

                                    </div>


                                </div>
                                    <button
                                        onClick={() =>
                                            handleAcceptOrder(order.itemId)
                                        }
                                        className="
                                                  mt-3 bg-green-600  hover:bg-green-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-semibold "
                                    >
                                        Accept Order
                                    </button>

                            </div>

                        ))
                    )
                }

            </div>

        </div>
    );


};

export default NewOrder;
