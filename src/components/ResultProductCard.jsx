const ResultProductCard = ({
    img,
    name,
    description,
    price,
    stock,
    category
}) => {
    return (

        <div className=" rounded-lg shadow p-4 flex items-center gap-5 bg-white">

            {/* Product Image */}
            <div className="w-32 rounded-lg overflow-hidden bg-gray-100">

                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                />

            </div>

            {/* Product Details */}
            <div className="flex flex-wrap flex-col justify-between">

                <div>

                    <h2 className="lg:text-xl font-bold text-gray-800">
                        {name}
                    </h2>

                    <p className="text-gray-500 mt-1 line-clamp-2">
                        {description}
                    </p>

                </div>

                <div className="flex items-center gap-6 mt-4">

                    <p className="lg:text-2xl font-bold text-green-600">
                        ₹{price}
                    </p>

                    <p className="text-sm text-gray-700">
                        Stock: {stock}
                    </p>

                    {category && (
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium uppercase">
                            {category}
                        </span>
                    )}

                </div>

            </div>

        </div>

    );
};

export default ResultProductCard;