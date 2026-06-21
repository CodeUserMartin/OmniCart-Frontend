import { useState, useMemo } from "react";
import { useSellerProducts } from "../../hooks/useSellerProducts.js";

import SellerSearchBar from "../../components/SellerPageSearchBar.jsx";
import ResultProductCard from "../../components/ResultProductCard.jsx";

const MyProducts = () => {

    const { products, loading } = useSellerProducts();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    // ✅ MUST be before return
    const categories = [...new Set(products?.map(p => p.category) || [])];

    const filteredProducts = useMemo(() => {

        if (!products) return [];

        return products.filter((product) => {

            const matchesSearch =
                product.name.toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

    }, [products, searchTerm, selectedCategory]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1 className="font-bold text-3xl m-4 text-white">
                My Products
            </h1>

            {/* SEARCH */}
            <SellerSearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* CATEGORY */}
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-4 mb-4 p-2 border rounded bg-white"
            >
                <option value="">All Categories</option>

                {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            {/* LIST */}
            <div className="flex flex-col gap-4 mt-3 overflow-auto">

                {filteredProducts.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10">
                        No products found
                    </p>
                ) : (
                    filteredProducts.map((product) => (
                        <ResultProductCard
                            key={product._id}
                            name={product.name}
                            img={product.images[0]}
                            price={product.price}
                            stock={product.stock}
                            description={product.description}
                            category={product.category}
                        />
                    ))
                )}

            </div>
        </>
    );
};

export default MyProducts;