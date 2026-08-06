import { useState, useEffect } from "react";

import ResultProductCard from "../../components/ResultProductCard.jsx";
import SellerPageSearchBar from "../../components/SellerPageSearchBar.jsx";

import {
    updateProduct,
    getSellerProducts
} from "../../api/productApi.js";

import toast from "react-hot-toast";

const UpdateProduct = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [form, setForm] = useState({
        name: "",
        desc: "",
        stock: ""
    });

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await getSellerProducts();

                setProducts(
                    res.data.data.products
                );

            } catch (error) {
                toast.error(
                    "Failed to fetch products!"
                );

            }

        };

        fetchProducts();

    }, []);

    const filteredProducts = products.filter(
        (product) =>
            product.name
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
    );

    const handleSelectProduct = (
        product
    ) => {

        setSelectedProduct(product);

        setForm({
            name: product.name || "",
            desc:
                product.description || "",
            stock:
                product.stock || ""
        });

    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value
        });

    };

    const handleUpdate = async () => {

        try {

            if (!selectedProduct) {

                toast.error(
                    "No product selected!"
                );

                return;
            }

            const res =
                await updateProduct(
                    selectedProduct._id,
                    form
                );

            const updatedProduct =
                res.data.data.product;

            setSelectedProduct(
                updatedProduct
            );

            setProducts((prev) =>
                prev.map((product) =>
                    product._id ===
                        updatedProduct._id
                        ? updatedProduct
                        : product
                )
            );

            setForm({
                name:
                    updatedProduct.name,
                desc:
                    updatedProduct.description,
                stock:
                    updatedProduct.stock
            });

            toast.success(
                "Product updated successfully!"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to update product!"
            );

        }

    };

    return (
        <>

            {/* Search Bar */}
            <div>

                <SellerPageSearchBar
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(
                            e.target.value
                        )
                    }
                    placeholder="Search Product..."
                />

                {
                    searchTerm && (

                        <div className="bg-white rounded-lg shadow mt-2 max-h-40 overflow-auto ">

                            {
                                filteredProducts.length === 0 ? (

                                    <div className="p-3 text-gray-500">
                                        No products found
                                    </div>

                                ) : (

                                    filteredProducts.map(
                                        (
                                            product
                                        ) => (

                                            <div
                                                key={
                                                    product._id
                                                }
                                                onClick={() =>
                                                    handleSelectProduct(
                                                        product
                                                    )
                                                }
                                                className="p-3 border-b cursor-pointer hover:bg-gray-100"
                                            >
                                                {
                                                    product.name
                                                }
                                            </div>

                                        )
                                    )

                                )
                            }

                        </div>

                    )
                }

            </div>

            {/* Update Product Form Container */}
            <div className="bg-white p-6 rounded shadow-md mt-6">

                {/* Result Display */}
                {
                    selectedProduct && (

                        <ResultProductCard
                            img={
                                selectedProduct
                                    ?.images?.[0]
                            }
                            name={
                                selectedProduct?.name
                            }
                            description={
                                selectedProduct?.description
                            }
                            price={
                                selectedProduct?.price
                            }
                            stock={
                                selectedProduct?.stock
                            }
                            category={
                                selectedProduct?.category
                            }
                        />

                    )
                }

                {/* Update Form */}
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        {/* Product Name */}
                        <div>

                            <label
                                htmlFor="productName"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Product Name
                            </label>

                            <input
                                name="name"
                                value={form.name}
                                onChange={
                                    handleChange
                                }
                                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                        </div>

                        {/* Product Stock */}
                        <div>

                            <label
                                htmlFor="productStock"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Product Stock
                            </label>

                            <input
                                name="stock"
                                type="number"
                                value={
                                    form.stock
                                }
                                onChange={
                                    handleChange
                                }
                                className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                        </div>

                    </div>

                    {/* Product Description */}
                    <div className="mt-4">

                        <label
                            htmlFor="productDescription"
                            className="block text-sm font-bold text-gray-700"
                        >
                            Product Description
                        </label>

                        <textarea
                            name="desc"
                            value={
                                form.desc
                            }
                            onChange={
                                handleChange
                            }
                            rows={7}
                            className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                    </div>

                </div>

                {/* Update Button */}
                <div className="bg-(--accent-color) text-white p-2 rounded mt-4 text-center uppercase font-bold hover:cursor-pointer hover:bg-red-800">

                    <button
                        disabled={
                            !selectedProduct
                        }
                        onClick={
                            handleUpdate
                        }
                    >
                        Update Product
                    </button>

                </div>

            </div>

        </>
    );
};

export default UpdateProduct;