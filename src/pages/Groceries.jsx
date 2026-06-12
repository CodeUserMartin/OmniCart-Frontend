import Navbar from "../components/Navbar.jsx"
import HeroBanner from "../components/HeroBanner.jsx"
import GroceriesBanner from "../assets/Groceries-Fresh-banner.png"
import CategoryCard from "../components/CategoryCard.jsx"

import ProductCard from "../components/ProductCard.jsx"

// Category Images
import Milk from "../assets/Grociries-category-imgs/Milk-img.jfif"
import Vegetables from "../assets/Grociries-category-imgs/vegetable-img.jfif"
import Fruits from "../assets/Grociries-category-imgs/Fruit-img.jfif"
import Bread from "../assets/Grociries-category-imgs/Bread-img.jfif"
import BeautyCare from "../assets/Grociries-category-imgs/Beauty-and-Care-img.jfif"


import { useSearchParams } from "react-router-dom";

import { apiClient } from "../api/axios.js";

import { useEffect, useState } from "react";

const Groceries = () => {

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");
    const [products, setProducts] = useState([]);

    const categories = [
        { name: "Milk", img: Milk },
        { name: "Vegetables", img: Vegetables },
        { name: "Fruits", img: Fruits },
        { name: "Bread", img: Bread },
        { name: "Beauty & Care", img: BeautyCare },
    ]

    useEffect(() => {
        fetchProducts();
    }, [search]);

    const fetchProducts = async () => {

        const response = await apiClient.get(
            `/product?category=groceries&search=${search || ""}`
        );

        setProducts(response.data.data.products);
    };

    return (
        <>
            <Navbar />
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
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Groceries