const ResultProductCard = ({
    img,
    name,
    description,
    price,
    stock,
    category
}) => {
    return (

        <div className="bg-white rounded-lg shadow p-4 flex gap-4">

            {/* Product Image */}
            <div className="w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-gray-100">

                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                />

            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between flex-1">

                <div>

                    <h2 className="text-xl font-bold text-gray-800">
                        {name}
                    </h2>

                    <p className="text-gray-500 mt-1 line-clamp-2">
                        {description}
                    </p>

                </div>

                <div className="flex items-center gap-6 mt-4">

                    <p className="text-2xl font-bold text-green-600">
                        ₹{price}
                    </p>

                    <p className="font-medium text-gray-700">
                        Stock: {stock}
                    </p>

                    {category && (
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {category}
                        </span>
                    )}

                </div>

            </div>

        </div>

    );
};

export default ResultProductCard;