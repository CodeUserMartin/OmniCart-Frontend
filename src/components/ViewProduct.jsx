import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useAddToCart } from "../hooks/useAddToCart.js";

import Navbar from "./Navbar.jsx";

import { getProductById } from "../api/productApi";

import { useBuyNow } from "../hooks/useBuyNow";

import { getCurrentUser } from "../api/authApi.js";
import { getUserCart, decreaseCartItem } from "../api/cartApi.js";

export default function ViewProduct() {


    const buyNow = useBuyNow();

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [LoggedInUser, setLoggedInUser] = useState("");
    const [cartItem, setCartItem] = useState(null);

    // Check for Addby Id of the Seller
    const SellerId = product?.addedBy?._id;

    // Checking if Login User and Product Seller Same.
    const isOwner = SellerId === LoggedInUser;


    const navigate = useNavigate();

    // Check current LoggedInUser;
    const currentLoggedInUser = async () => {

        try {

            const LoggedInUser = await getCurrentUser();
            setLoggedInUser(LoggedInUser.data.data.user._id);

        } catch (error) {
            console.error('Something went Wrong', error);
        }
    }

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                setLoading(true);

                const res = await getProductById(id);

                setProduct(res.data.data.product);




                await checkProductInCart();

            } catch (error) {
                toast.error("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);

    const checkProductInCart = async () => {
        try {
            const res = await getUserCart();

            const cartItems = res.data.data.finalCartItems;

            const currentCartItem = cartItems.find(
                (item) => item.productId === id
            );

            setCartItem(currentCartItem || null);

        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };


    const handleAddToCart = async () => {
        try {
            await addToCartHandler(product._id);

            // Fetch updated cart
            const res = await getUserCart();

            const cartItems = res.data.data.finalCartItems;

            const currentCartItem = cartItems.find(
                (item) => item.productId === product._id
            );

            setCartItem(currentCartItem || null);

        } catch (error) {
            console.error("Error adding product to cart:", error);
            toast.error("Failed to add product to cart");
        }
    };

    const increaseQuantity = async () => {
        try {

            // Check if current cart quantity has reached available stock
            if (cartItem && cartItem.quantity >= product.stock) {
                toast.error(
                    `Only ${product.stock} items are available in stock.`
                );
                return;
            }

            await addToCartHandler(product._id);

            const res = await getUserCart();

            const cartItems = res.data.data.finalCartItems;

            const currentCartItem = cartItems.find(
                (item) => String(item.productId) === String(product._id)
            );

            setCartItem(currentCartItem || null);

        } catch (error) {
            console.error("Error increasing quantity:", error);
            toast.error("Failed to increase quantity");
        }
    };

    const decreaseQuantity = async () => {
        try {

            if (cartItem?.quantity === 1) {
                setCartItem(null);
                return;
            }

            await decreaseCartItem(product._id);

            const res = await getUserCart();

            const cartItems = res.data.data.finalCartItems;

            const currentCartItem = cartItems.find(
                (item) => String(item.productId) === String(product._id)
            );

            setCartItem(currentCartItem || null);

        } catch (error) {
            console.error("Error decreasing quantity:", error);
            toast.error("Failed to decrease quantity");
        }
    };

    const addToCartHandler = useAddToCart();

    currentLoggedInUser();




    if (loading) return <p className="p-4 text-gray-500">Loading product details...</p>;


    if (!product) return <p className="p-4 text-gray-500">Product not found</p>;

    if (!product.isActive) {
        return (
            <>
                <Navbar />

                <div className="min-h-[60vh] flex items-center justify-center p-6">
                    <div className="text-center max-w-md">

                        <h1 className="text-3xl font-bold mb-3">
                            Product Unavailable
                        </h1>

                        <p className="text-gray-600">
                            Sorry, this product is no longer available.
                            It may have been removed by the seller or is no longer listed.
                        </p>

                    </div>
                </div>
            </>
        );
    }


    return (
        <>
            <Navbar />

            <div className="p-6 max-w-6xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT - IMAGE */}
                    <div className="flex justify-center items-center border rounded-lg p-4">
                        <img
                            src={product.images || product.image}
                            alt={product.name}
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="flex flex-col gap-4">

                        <h1 className="text-3xl font-bold">{product.name}</h1>

                        <p className="text-gray-600">{product.description}</p>

                        <p className="text-2xl font-bold text-green-600">
                            ₹{product.price}
                        </p>

                        <p className="text-sm text-gray-500">
                            Stock: {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </p>

                        <p className="text-sm text-gray-600">
                            Sold by:{" "}
                            <span className="font-semibold">
                                {product.addedBy.sellerInfo.storeName || "Temp Seller"}
                            </span>
                        </p>


                        {!isOwner ? (

                            product.stock <= 0 ? (

                                // PRODUCT OUT OF STOCK
                                <div className="mt-4">
                                    <p className="text-red-500 font-semibold text-xl">
                                        Out of Stock
                                    </p>
                                </div>

                            ) : cartItem ? (

                                // PRODUCT ALREADY IN CART
                                <div className="flex items-center gap-4 mt-4">

                                    <button
                                        onClick={decreaseQuantity}
                                        className="bg-gray-200 px-4 py-3 rounded-lg"
                                    >
                                        −
                                    </button>

                                    <span className="font-semibold text-lg">
                                        {cartItem.quantity}
                                    </span>

                                    <button
                                        onClick={increaseQuantity}
                                        className="bg-gray-200 px-4 py-3 rounded-lg"
                                    >
                                        +
                                    </button>

                                </div>

                            ) : (

                                // PRODUCT NOT IN CART
                                <div className="flex gap-4 mt-4">

                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                                    >
                                        Add to Cart
                                    </button>

                                    <button
                                        onClick={() => buyNow(product._id)}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg"
                                    >
                                        Buy Now
                                    </button>

                                </div>

                            )

                        ) : (

                            // OWNER CANNOT PURCHASE
                            <div>
                                <p className="text-red-500 font-bold text-2xl">
                                    Cannot Purchase your own product!
                                </p>
                            </div>

                        )}
                    </div>
                </div>

                {/* REVIEWS SECTION */}
                <div className="mt-10">

                    <h2 className="text-xl font-bold mb-2">
                        Reviews
                    </h2>

                    <span className="text-gray-700">
                        ⭐ 4.2 (231 reviews)
                    </span>

                </div>

            </div>
        </>

    );
}