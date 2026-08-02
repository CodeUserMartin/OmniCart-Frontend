import SellerSearchBar from "../../components/SellerPageSearchBar.jsx";
import { toast } from "react-hot-toast";
import { deleteProduct } from "../../api/productApi.js";
import { useSellerProducts } from "../../hooks/useSellerProducts.js";
import { useState, useMemo } from "react";

const DeleteProduct = () => {

    const {
        products,
        setProducts,
        loading
    } = useSellerProducts();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    // Get unique categories
    const categories = useMemo(() => {
        return [...new Set(products?.map(p => p.category) || [])];
    }, [products]);

    // Filter products
    const filteredProducts = useMemo(() => {
        return products?.filter((product) => {

            const matchesSearch =
                product.name.toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [products, searchTerm, selectedCategory]);

    // Delete handler
    const handleDeleteProduct = async (productId) => {

        try {

            await deleteProduct(productId);

            setProducts((prev) =>
                prev.filter((product) => product._id !== productId)
            );

            // CLOSE MODAL (FIXED)
            setShowDeleteModal(false);
            setSelectedProductId(null);

            toast.success("Product deleted successfully!");

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to delete product"
            );
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="space-y-6">

            {/* Search Bar */}
            <div>
                <SellerSearchBar
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Category Dropdown */}
            <div>
                <select
                    className="p-2 border rounded bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>

                    {categories.map((cat, i) => (
                        <option key={i} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Product List */}
            <div className="space-y-4 h-135 overflow-y-scroll scrollbar-none">

                {filteredProducts?.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        No products found
                    </p>
                ) : (

                    filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow p-2 flex flex-col justify-between items-center "
                        >

                            {/* Left Side */}
                            <div className="flex justify-between items-center gap-4">

                                {/* Image */}
                                <div className="md:w-32 lg:2-32 bg-gray-100 rounded-md overflow-hidden">
                                    <img
                                        src={product.images?.[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col">

                                    <div>
                                        <h2 className="text-md lg:text-xl font-bold">
                                            {product.name}
                                        </h2>

                                        <p className="text-gray-500 text-sm mt-2 lg:text-md ">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-3 space-y-1">

                                        <p className="font-semibold text-green-600">
                                            ₹{product.price}
                                        </p>

                                        <p>
                                            Stock:
                                            <span className="font-medium ml-1 text-xs lg:text-md">
                                                {product.stock}
                                            </span>
                                        </p>

                                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium uppercase">
                                            {product.category}
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* Delete Button */}
                            <button
                                className="w-full mt-2 bg-red-600 text-white p-1 py-2 lg:px-4 lg:py-3 uppercase hover:cursor-pointer  hover:bg-red-800 rounded-lg"
                                onClick={() => {
                                    setSelectedProductId(product._id);
                                    setShowDeleteModal(true);
                                }}
                            >
                                Delete
                            </button>


                        </div>
                    ))
                )}
            </div>

            {/* MODAL */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white rounded-xl p-6 w-96 shadow-lg">

                        <h2 className="text-sm font-bold mb-3">
                            Delete Product
                        </h2>

                        <p className="text-gray-600">
                            Are you sure you want to delete this product?
                        </p>

                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setSelectedProductId(null);
                                }}
                                className="border px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() =>
                                    handleDeleteProduct(selectedProductId)
                                }
                                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default DeleteProduct;