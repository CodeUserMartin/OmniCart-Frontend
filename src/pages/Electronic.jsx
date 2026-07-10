import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"

// Hero Banner Image
import ElectronicBanner from "../assets/Electronics-Tech-banner.png"
import CategoryCard from "../components/CategoryCard.jsx"

import ProductCard from "../components/ProductCard.jsx"




// Category Images
import LaptopImg from "../assets/Electronics-category-imgs/Laptop-img.jfif"
import SmartphoneImg from "../assets/Electronics-category-imgs/Smartphone-img.jfif"
import HeadphonesImg from "../assets/Electronics-category-imgs/Headphone-img.jfif"
import SmartWatchImg from "../assets/Electronics-category-imgs/SmartWatch-img.jfif"
import SpeakersImg from "../assets/Electronics-category-imgs/Speaker-img.jfif"


import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { apiClient } from "../api/axios.js";

import { addToCart } from "../api/cartApi.js"
import { useAddToCart } from "../hooks/useAddToCart.js"

import { searchProductByCategoryOrBySearch } from "../api/productApi.js"

const Electronics = () => {

    const category = 'electronics'

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");

    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);

    const [searchValue, setSearchValue] = useState(false);

    const categories = [
        { name: "Laptops", img: LaptopImg },
        { name: "Smartphones", img: SmartphoneImg },
        { name: "Headphones", img: HeadphonesImg },
        { name: "Smart Watches", img: SmartWatchImg },
        { name: "Speakers", img: SpeakersImg },
    ]

    useEffect(() => {

        if (search) {
            setSearchValue(true);
            fetchProducts();
        } else {
            console.log("Hello");

        }


    }, [search]);

    const fetchProducts = async () => {

        // const response = await apiClient.get(
        //     `/product?category=electronics&search=${search || ""}`
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

    {/* Add To Cart Logic */ }
    const handleAddToCart = useAddToCart();

    fetchcategoryProducts();
    return (
        <>
            <Navbar />
            <HeroBanner img={ElectronicBanner} size="23" />

            {
                searchValue ? (

                    // True Condition
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">Matching Results for : <span className="text-lg font-normal">{search}</span></h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">

                            {/* Product Card */}
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product}
                                    onAddToCart={handleAddToCart} />
                            ))}
                        </div>

                    </div>

                ) : (
                    // False Condition
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

                    // Product Card //
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product}
                            onAddToCart={handleAddToCart} />
                    ))}
                </div>

            </div> */}

        </>
    )

}

export default Electronics