import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import GroceriesBanner from "../assets/Groceries-Fresh-banner.png"
import CategoryCard from "../components/CategoryCard.jsx"

import ProductCard from "../components/ProductCard.jsx"

// Category Images
import Milk from "../assets/Grociries-category-imgs/Milk-img.jfif"
import Vegetables from "../assets/Grociries-category-imgs/Vegetable-img.jfif"
import Fruits from "../assets/Grociries-category-imgs/Fruit-img.jfif"
import Bread from "../assets/Grociries-category-imgs/Bread-img.jfif"
import BeautyCare from "../assets/Grociries-category-imgs/Beauty-and-Care-img.jfif"


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Import Api Calls
import { apiClient } from "../api/axios.js";
import { addToCart } from "../api/cartApi.js"
import { searchProductByCategoryOrBySearch } from "../api/productApi.js"

// Import Hooks
import { useAddToCart } from "../hooks/useAddToCart.js"
import toast from "react-hot-toast"

import Loader from "../components/Loader.jsx"


const Groceries = () => {

    // Default Page Category
    let category = 'groceries'

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");

    // Maintaing Search state to manage the UI Changes.
    const [searchValue, setSearchValue] = useState(false);

    // Product state management
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Sub-Categories Card
    const categories = [
        { name: "Milk", img: Milk },
        { name: "Vegetables", img: Vegetables },
        { name: "Fruits", img: Fruits },
        { name: "Bread", img: Bread },
        { name: "Beauty & Care", img: BeautyCare },
    ]

    // Run on first mount
    useEffect(() => {

        fetchcategoryProducts();

        if (search) {
            setSearchValue(true);
            fetchProducts();
        } else {
            console.error("Failed to search for product!");
        }


    }, [search]);



    // Fetch category based products
    const fetchcategoryProducts = async () => {

        try {

            setLoading(true);
            const response = await searchProductByCategoryOrBySearch("", category);

            setCategoryProducts(response.data.data.products);


        } catch (error) {
            toast.error("Failed to load products");
        } finally {
            setLoading(false);
        }
    }

    // Fetch products based on search
    const fetchProducts = async () => {

        // const response = await apiClient.get(
        //     `/product?category=groceries&search=${search || ""}`
        // );

        try {

            const response = await searchProductByCategoryOrBySearch(search, category);

            setProducts(response.data.data.products);

        } catch (error) {
            toast.error("Failed to load products");
        }

    };

    {/* Add To Cart Logic */ }
    const handleAddToCart = useAddToCart();

    useEffect(() => {
        fetchcategoryProducts();
    }, [])

    return (
        <>

            <Navbar />

            {
                searchValue ? (

                    // True Condition
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Matching Results for : <span className="text-lg font-normal">{search}</span></h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                            {products.map((product) => (
                                <ProductCard key={product._id} product={product}
                                    onAddToCart={handleAddToCart} />
                            ))}
                        </div>

                    </div>

                ) : (
                    // False Condition
                    <div>
                        <HeroBanner img={GroceriesBanner} size="55" />
                        <div>
                            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:p-3 p-2">
                                {categories.map((category, index) => (
                                    <CategoryCard key={index} name={category.name} img={category.img} />
                                ))}
                            </div>
                        </div>


                        <div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                                {
                                    loading ?
                                        <div className="col-span-full flex justify-center items-center">
                                            <Loader />
                                        </div>

                                        :
                                        categoryProducts.map((product) => (
                                            <ProductCard key={product._id} product={product}
                                                onAddToCart={handleAddToCart} />
                                        ))}
                            </div>

                        </div>

                    </div>
                )
            }


            {/* <Navbar />
            <HeroBanner img={GroceriesBanner} size="23" />
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} name={category.name} img={category.img} />
                ))}
            </div>

            <div className="p-4">
                <h2 className="text-2xl font-bold">Matching Results for : <span className="text-lg font-normal">{search}</span></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                    {products.map((product) => (
                        <ProductCard key={product._id} product={product}
                            onAddToCart={handleAddToCart} />
                    ))}
                </div>

            </div> */}
        </>
    )
}

export default Groceries