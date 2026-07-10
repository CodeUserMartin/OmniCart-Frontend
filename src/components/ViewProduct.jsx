import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useAddToCart } from "../hooks/useAddToCart.js";

import Navbar from "./Navbar.jsx";

import { getProductById } from "../api/productApi";

import { useBuyNow } from "../hooks/useBuyNow";

import { getCurrentUser } from "../api/authApi.js";

export default function ViewProduct() {


    const buyNow = useBuyNow();

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [LoggedInUser, setLoggedInUser] = useState("");

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

                setProduct(res.data.data.product); // adjust if backend differs

<<<<<<< HEAD
                console.log("product" ,res.data.data.product);

=======
>>>>>>> f60a9dae4b0205d9b21f4b52b5ed467c2cdea66e

            } catch (error) {
                console.log("Error fetching product:", error);
                toast.error("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);

    const addToCartHandler = useAddToCart();

    currentLoggedInUser();




    if (loading) return <p className="p-4 text-gray-500">Loading product details...</p>;


    if (!product) return <p className="p-4 text-gray-500">Product not found</p>;


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


                        {!isOwner && (
                            //  BUTTONS 
                            <div>
                                <div className="flex gap-4 mt-4">

                                    <button
                                        onClick={() => addToCartHandler(product._id)}
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
                            </div>
                        )

                        }

                        <div>
                            <p className="text-red-500 bold text-2xl">Cannot Purchase your own product!</p>
                        </div>


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