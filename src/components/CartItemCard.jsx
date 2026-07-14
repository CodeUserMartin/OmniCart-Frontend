import { Trash } from "lucide-react";

const CartItemCard = ({
    productId,
    name,
    description,
    price,
    quantity,
    image,
    onIncrease,
    onDecrease,
    onDelete,
}) => {


    return (

        <div className="bg-(--primary-color)  mt-6 p-4 rounded-lg flex items-center gap-4">

            <div className="flex items-center gap-4 w-full justify-between">

                <div className="flex items-center  gap-4">

                    {/* Item Image */}
                    <div className="lg:w-24 lg:h-24 w-28 h-28 rounded-md overflow-hidden">
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

                        <p className="text-xs lg:text-lg text-gray-400 mt-4">
                            {description}
                        </p>

                        <p className="text-lg font-bold">
                            ₹{price}
                        </p>

                        <button
                            onClick={() => onDecrease(productId)}
                            className="bg-gray-200 text-gray-700 lg:px-3 p-2 lg:py-1 rounded-md mr-2"
                        >
                            -
                        </button>

                        <span className=" text-gray-700 px-3 py-1 rounded-md font-bold text-lg">
                            {quantity}
                        </span>

                        <button
                            onClick={() => onIncrease(productId)}
                            className="bg-gray-200 text-gray-700 lg:px-3 p-2 lg:py-1 rounded-md ml-2"

                        >
                            +
                        </button>

                    </div>
                </div>


                {/* Remove Item Button */}
                <div>
                    <Trash color="black" size={34}
                        onClick={() => onDelete(productId)} />
                </div>

            </div>

        </div>
    );
};

export default CartItemCard;