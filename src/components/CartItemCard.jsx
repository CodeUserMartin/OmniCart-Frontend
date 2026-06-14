const CartItemCard = ({
    name,
    description,
    price,
    quantity,
    image
}) => {

    return (

        <div className="bg-(--primary-color) shadow-(--box-shadow) mt-6 p-4 rounded-lg flex items-center gap-4">

            <div className="flex items-center gap-4">

                {/* Item Image */}
                <div className="w-24 h-24 rounded-md overflow-hidden">
                    <img
                        src={image}
                        alt="Product-img"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Item Details */}
                <div className="text-black">

                    <h2 className="text-xl font-semibold">
                        {name}
                    </h2>

                    <p className="text-gray-400">
                        {description}
                    </p>

                    <p className="text-lg font-bold">
                        ₹{price}
                    </p>

                    <p className="text-lg font-bold">
                        Quantity: {quantity}
                    </p>

                </div>

            </div>

        </div>
    );
};

export default CartItemCard;