import SellerSearchBar from "../../components/SellerPageSearchBar.jsx";
import { toast } from "react-hot-toast";

import { deleteProduct } from "../../api/productApi.js";
import { useSellerProducts } from "../../hooks/useSellerProducts.js";

import { useState } from "react";

const DeleteProduct = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const {
        products,
        setProducts,
        loading
    } = useSellerProducts();

    const [searchTerm, setSearchTerm] = useState("");

    const handleDeleteProduct = async (productId) => {


        try {

            await deleteProduct(productId);

            setProducts((prev) =>
                prev.filter(
                    (product) => product._id !== productId
                )
            );

            toast.success(
                "Product deleted successfully!"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to delete product"
            );
        }
    };

    return (
        <div className="space-y-6">

            {/* Search Bar */}
            <div>
                <SellerSearchBar />
            </div>

            {/* Product List */}
            <div className="space-y-4">

                {products.map((product) => (

                    <div
                        key={product._id}
                        className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
                    >

                        {/* Left Side */}
                        <div className="flex gap-4">

                            {/* Image */}
                            <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                                <img
                                    src={product.images}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col justify-between">

                                <div>
                                    <h2 className="text-xl font-bold">
                                        {product.name}
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mt-3 space-y-1">

                                    <p className="font-semibold text-green-600">
                                        ₹{product.price}
                                    </p>

                                    <p>
                                        Stock:
                                        <span className="font-medium ml-1">
                                            {product.stock}
                                        </span>
                                    </p>

                                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {product.category}
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Delete Button */}
                        <div>

                            <button className="bg-(--accent-color) text-white px-4 py-3 uppercase hover:cursor-pointer "
                                onClick={() => {
                                    setSelectedProductId(product._id);
                                    setShowDeleteModal(true);
                                }}
                            >
                                Delete Product
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {
                showDeleteModal && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                        <div className="bg-white rounded-xl p-6 w-96 shadow-lg">

                            <h2 className="text-xl font-bold mb-3">
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

                )
            }

        </div>
    );
};

export default DeleteProduct;