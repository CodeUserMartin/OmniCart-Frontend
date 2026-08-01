import { useNavigate } from "react-router-dom";

import { useAddToCart } from "../hooks/useAddToCart.js";

const ProductCard = ({ product }) => {

    const addToCartHandler = useAddToCart();

    const navigate = useNavigate();

    return (
        <>
            <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-white shadow-(--box-shadow) rounded-lg w-full lg:h-96 cursor-pointer">

                {/* Product Image */}
                <div className="h-54 w-full">
                    <img src={product.images} alt="Product" loading="lazy" className="w-full h-full object-contain" />
                </div>

                {/* Product Details */}
                <div className="flex justify-between bg-(--accent-color-3) text-white p-3">

                    <div className="flex flex-col gap-2">
                        <h3 className="text-md">{product.name}</h3>
                        <p className="line-clamp-6 max-h-7 ">{product.description}</p>
                        <p className="text-amber-200">${product.price.toFixed(2)}</p>
                    </div>

                    <div>
                        <p>{
                            product.numReviews > 0 ? `${product.rating} (${product.numReviews} reviews)` : "4.2 (231)"
                        }</p>
                    </div>

                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCartHandler(product._id);
                    }}
                    className="bg-(--accent-color) uppercase w-full text-white p-4 text-center hover:bg-red-800 hover:cursor-pointer"
                >
                    Add to Cart
                </button>

            </div>
        </>
    )
}

export default ProductCard