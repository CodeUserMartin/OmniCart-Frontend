import Navbar from "../components/Navbar.jsx"
import ProductCard from "../components/ProductCard.jsx"

import { useState, useEffect } from "react"

import { useSearchParams } from "react-router-dom"

import { searchProducts } from "../api/productApi.js";

import { useAddToCart } from "../hooks/useAddToCart.js";
import toast from "react-hot-toast";
import Loader from "../components/Loader.jsx";


const ProductResultPage = () => {

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const addToCartHandler = useAddToCart();

    // Fetch Products when Search Query changes
    useEffect(() => {

        if (searchQuery) {
            setProducts([]); // Clear previous results
            fetchProducts();
        }

    }, [searchQuery]);


    // Fetch Products based on Search Query
    const fetchProducts = async () => {

        try {

            setLoading(true);
            const response = await searchProducts(searchQuery);

            setProducts(response.data.data.products);

        } catch (error) {
            // toast.error("Failed to search product");

        } finally {
            setLoading(false);
        }
    };

    if (products.length === 0) {
        return (
            <div>
                <Navbar />

                <div>
                    <p className="col-span-full text-center text-xl text-gray-500 mt-10">
                        No products found matching your search.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navbar />

            <div className="p-4">
                <h2 className="text-2xl font-bold">Matching Results for : <span className="text-lg font-normal">{searchQuery}</span></h2>
            </div>

            {/* Wrapper */}
            <div>

                {/* Products Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                    {/* Product Card */}
                    {
                        loading ?
                            <div className="h-full w-full flex justify-center items-center">
                                <Loader />
                            </div>
                            :
                            products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}

                </div>

            </div>

        </>
    )
}

export default ProductResultPage