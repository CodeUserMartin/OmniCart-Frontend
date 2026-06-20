import { useNavigate } from "react-router-dom";

import { useAddToCart } from "../hooks/useAddToCart.js";

const ProductCard = ({ product }) => {

     const addToCartHandler = useAddToCart();

    const navigate = useNavigate();

    return (
        <>
            <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-white shadow-(--box-shadow) rounded-lg p-4">

                {/* Product Image */}
                <div className="h-54 w-full bg-amber-100">
                    <img src={product.images} alt="Product" className="w-full h-full object-cover" />
                </div>

                {/* Product Details */}
                <div className="flex justify-between bg-(--accent-color-3) text-white p-4">

                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price.toFixed(2)}</p>
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
                        e.stopPropagation();
                        addToCartHandler(product._id);
                    }}
                    className="bg-(--accent-color) uppercase w-full text-white p-4 text-center"
                >
                    Add to Cart
                </button>

            </div>
        </>
    )
}

export default ProductCard