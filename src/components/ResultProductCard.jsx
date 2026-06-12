const ResultProductCard = ({ img, name, description, price, stock }) => {
    return (
        <div className="flex items-center gap-4 bg-(--primary-color) p-4">

            {/* Product Image */}
            <div className="w-28 h-28 bg-gray-200">
                <img src={img} alt="Product Image" />
            </div>

            {/* Product Details */}
            <div>

                {/* Product Name */}
                <div>
                    <h2 className="text-lg font-bold">{name}</h2>
                </div>

                {/* Product Description */}
                <div>
                    <p>{description}</p>
                </div>

                {/* Product Price */}
                <div>
                    <p className="text-xl font-bold">${price.toFixed(2)}</p>
                </div>

                {/* Product Stock */}
                <div>
                    <p>Stock: {stock}</p>
                </div>

            </div>

        </div>
    )
}


export default ResultProductCard;