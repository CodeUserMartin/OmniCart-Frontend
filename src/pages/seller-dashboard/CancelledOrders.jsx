import { useCancelledOrders } from "../../hooks/useCancelledOrders.js";
import ResultProductCard from "../../components/ResultProductCard.jsx";
import Loader from "../../components/Loader.jsx";

const CancelledOrders = () => {

    const { orders, loading } = useCancelledOrders();

    if (loading) {
        return (
            <div className="h-full flex justify-center items-center">
                <Loader color={'white'} />
            </div>
        );
    }

    return (
        <div className="bg-(--accent-color-2) p-4 rounded-xl w-full h-full">

            {/* Title */}
            <h1 className="font-bold text-3xl text-white">
                Cancelled Orders
            </h1>

            {/* Products */}
            <div className="flex flex-col gap-4 mt-3 overflow-auto h-150 scrollbar-none lg:p-3">

                {orders.length === 0 ? (
                    <p className="text-white">
                        No Cancelled Orders Found
                    </p>
                ) : (
                    orders.map((order) => (
                        <ResultProductCard
                            key={order.itemId}
                            img={order.productImage}
                            name={order.productName}
                            description={order.description}
                            price={order.price}
                            stock={order.quantity}
                        />
                    ))
                )}

            </div>

        </div>
    );
};

export default CancelledOrders;