import Navbar from "../components/Navbar.jsx"
import ProductCard from "../components/ProductCard.jsx"

import { useState, useEffect } from "react"

import { useSearchParams } from "react-router-dom"

import { searchProducts } from "../api/productApi.js";

import { useAddToCart } from "../hooks/useAddToCart.js";


const ProductResultPage = () => {

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    const [products, setProducts] = useState([]);

    const addToCartHandler = useAddToCart();

    // Fetch Products when Search Query changes
    useEffect(() => {

        if (searchQuery) {
            fetchProducts();
        }

    }, [searchQuery]);


    // Fetch Products based on Search Query
    const fetchProducts = async () => {

        try {

            const response = await searchProducts(searchQuery);

            console.log(response.data);

            setProducts(response.data.data.products);

        } catch (error) {

            console.log(error);

        }
    };


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
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}

                </div>

            </div>

        </>
    )
}

export default ProductResultPage