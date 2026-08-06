import { Trash } from "lucide-react";
import { Link } from "react-router-dom";

const CartItemCard = ({
    productId,
    name,
    description,
    price,
    quantity,
    image,
    isActive,
    onIncrease,
    onDecrease,
    onDelete,
}) => {


    return (

        <Link to={`/product/${productId}`}
            className="bg-(--primary-color)  mt-6 p-4 rounded-lg flex items-center gap-4">

            <div className="flex items-center gap-4 w-full justify-between">

                <div className="flex items-center  gap-4">

                    {/* Item Image */}
                    <div className="lg:w-24 lg:h-24 w-full h-full  rounded-md overflow-hidden">
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

                        <p className="text-xs lg:text-lg text-gray-400 mt-4 line-clamp-3">
                            {description}
                        </p>

                        <p className="text-lg font-bold">
                            ₹{price}
                        </p>

                        <button
                            disabled={!isActive}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onDecrease(productId)
                            }}
                            className="bg-gray-200 text-gray-700 lg:px-3 p-2 lg:py-1 rounded-md mr-2 cursor-pointer hover:bg-gray-300"
                        >
                            -
                        </button>

                        <span className=" text-gray-700 px-3 py-1 rounded-md font-bold text-lg">
                            {quantity}
                        </span>



                        <button
                            disabled={!isActive}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onIncrease(productId)
                            }}
                            className="bg-gray-200 text-gray-700 lg:px-3 p-2 lg:py-1 rounded-md ml-2 cursor-pointer hover:bg-gray-300"

                        >
                            +
                        </button>

                        {/* Show message only when product is inactive */}
                        {!isActive && (
                            <p className="text-red-500 font-semibold mt-2">
                                This product is no longer available.
                            </p>
                        )}

                    </div>
                </div>


                {/* Remove Item Button */}
                <div>
                    <Trash color="black" size={34}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onDelete(productId)
                        }} />
                </div>

            </div>

        </Link>
    );
};

export default CartItemCard;