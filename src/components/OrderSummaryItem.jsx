import { Trash } from "lucide-react";

const OrderSummaryItem = ({
    name,
    description,
    price,
    quantity,
    image
}) => {

    return (

        <div className="bg-(--primary-color)  mt-6 p-4 rounded-lg flex items-center gap-4">

            <div className="flex items-center gap-4 w-full justify-between">

                <div className="flex items-center  gap-4">

                    {/* Item Image */}
                    <div className="lg:w-24 lg:h-24
                    w-36 h-36 rounded-md overflow-hidden">
                        <img
                            src={image}
                            alt="Product-img"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item Details */}
                    <div className="text-black">

                        <h2 className="text-xs lg:text-xl font-semibold">
                            {name}
                        </h2>

                        <p className="text-sm lg:text-lg mt-4 text-gray-400">
                            {description}
                        </p>

                        <p className="text-xm lg:text-lg font-bold mt-4">
                            ₹{price}
                        </p>

                        <p className="text-xs lg:text-lg font-bold">
                            Quantity: {quantity}
                        </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default OrderSummaryItem;