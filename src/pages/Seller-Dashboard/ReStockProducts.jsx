import ResultProductCard from "../../components/ResultProductCard.jsx";
import SellerSearchBar from "../../components/SellerPageSearchBar.jsx";
import { useState } from "react";
import { useSellerProducts } from "../../hooks/useSellerProducts.js";

// Icons
import { ChevronDown, ChevronUp } from "lucide-react";

const ReStockProducts = () => {

    const { products, loading } = useSellerProducts();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showOutOfStock, setShowOutOfStock] = useState(false);

    // OUT OF STOCK
    const outOfStockProducts = products.filter(
        (product) => product.stock === 0
    );

    // FILTERED PRODUCTS (SEARCH + CATEGORY + STOCK SAFE)
    const filteredProducts = products
        .filter((product) => product.stock > 0)
        .filter((product) => {
            if (selectedCategory === "all") return true;
            return product.category === selectedCategory;
        })
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="flex flex-col gap-4">

            {/* HEADER - OUT OF STOCK TOGGLE */}
            <div
                onClick={() => setShowOutOfStock(!showOutOfStock)}
                className="flex items-center justify-between gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer"
            >
                <h1 className="font-bold text-3xl text-white">
                    Out of Stock Products
                </h1>

                {showOutOfStock
                    ? <ChevronUp color="white" />
                    : <ChevronDown color="white" />
                }
            </div>

            {/* OUT OF STOCK LIST */}
            {showOutOfStock && (
                <div className="flex flex-col gap-4 overflow-y-auto h-50">
                    {outOfStockProducts.map((product) => (
                        <div
                            key={product._id}
                            className="opacity-60 bg-gray-200 rounded"
                        >
                            <ResultProductCard
                                img={product.images?.[0]}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                stock={product.stock}
                            />

                            <p className="text-red-600 font-bold px-3 pb-2 mt-2">
                                OUT OF STOCK
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* FILTER BAR (CATEGORY + SEARCH) */}
            <div className="flex gap-3 items-center p-3">

                {/* CATEGORY DROPDOWN */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border rounded bg-white "
                >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="groceries">Grocery</option>
                </select>

                {/* SEARCH BAR */}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full p-2 border rounded bg-white"
                />

            </div>

            {/* SEARCH RESULTS */}
            <div className="flex flex-col gap-4 overflow-y-auto ">

                {filteredProducts.map((product) => (
                    <ResultProductCard
                        key={product._id}
                        img={product.images?.[0]}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        stock={product.stock}
                    />
                ))}

            </div>

        </div>
    );
};

export default ReStockProducts;