import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import CategoryCard from "../components/CategoryCard.jsx"

import ProductCard from "../components/ProductCard.jsx"

// Hero Banner Image
import ClothingBanner from "../assets/Clothing-Style-banner.png"

// Category Images
import TShirtImg from "../assets/Clothing-category-imgs/T-shirt-img.jfif"
import DressImg from "../assets/Clothing-category-imgs/Dress-img.jfif"
import SneakersImg from "../assets/Clothing-category-imgs/Sneaker-img.jfif"
import JacketImg from "../assets/Clothing-category-imgs/Jacket-img.jfif"
import PantsImg from "../assets/Clothing-category-imgs/Pant-img.jfif"


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


// Import API
import { apiClient } from "../api/axios.js";

// Import Hooks
import { addToCart } from "../api/cartApi.js"
import { useAddToCart } from "../hooks/useAddToCart.js"

import { searchProductByCategoryOrBySearch } from "../api/productApi.js"

const Clothing = () => {

    // Default Page Category
    const category = 'clothing'

    // Product State Management
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);

    // Search Feature
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    const [searchValue, setSearchValue] = useState(false);

    const categories = [
        { name: "T-Shirts", img: TShirtImg },
        { name: "Dresses", img: DressImg },
        { name: "Sneakers", img: SneakersImg },
        { name: "Jackets", img: JacketImg },
        { name: "Pants", img: PantsImg },
    ];

    useEffect(() => {

        if (search) {
            setSearchValue(true);
            fetchProducts();
        } else {
            console.log("useeffetc search: ", search);
        }

    }, [search]);

    const fetchProducts = async () => {

        // const response = await apiClient.get(
        //     `/product?category=clothing&search=${search || ""}`
        // );
        try {
            
            const response = await searchProductByCategoryOrBySearch(search, category);

            setProducts(response.data.data.products);

        } catch (error) {
            console.log("Failed to Load Products", error)
        }
    };

    const fetchcategoryProducts = async () => {

        try {

            const response = await searchProductByCategoryOrBySearch("", category);

            setCategoryProducts(response.data.data.products);


        } catch (error) {
            console.log("Failed to load products:", error);

        }
    }

    {/* Add To Cart Logic */ }
    const handleAddToCart = useAddToCart();


    fetchcategoryProducts();

    return (
        <>
            <Navbar />
            <HeroBanner img={ClothingBanner} size="23" />

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

                    <div>

                        <div className="flex flex-wrap justify-center gap-6 p-6">
                            {categories.map((category, index) => (
                                <CategoryCard key={index} name={category.name} img={category.img} />
                            ))}
                        </div>

                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                                {categoryProducts.map((product) => (
                                    <ProductCard key={product._id} product={product}
                                        onAddToCart={handleAddToCart} />
                                ))}
                            </div>
                        </div>
                    </div>

                )
            }


            {/* <div className="flex flex-wrap justify-center gap-6 p-6">
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

export default Clothing