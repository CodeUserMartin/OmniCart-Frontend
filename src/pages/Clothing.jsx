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


import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { apiClient } from "../api/axios.js";

const Clothing = () => {

    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");

    const categories = [
        { name: "T-Shirts", img: TShirtImg },
        { name: "Dresses", img: DressImg },
        { name: "Sneakers", img: SneakersImg },
        { name: "Jackets", img: JacketImg },
        { name: "Pants", img: PantsImg },
    ];

    useEffect(() => {
        fetchProducts();
    }, [search]);

    const fetchProducts = async () => {

        const response = await apiClient.get(
            `/product?category=clothing&search=${search || ""}`
        );

        setProducts(response.data.data.products);
    };

    return (
        <>
            <Navbar />
            <HeroBanner img={ClothingBanner} size="23" />
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

export default Clothing