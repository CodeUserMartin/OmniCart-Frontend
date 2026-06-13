import { useState } from "react";
import { addProduct } from "../../api/productApi";
import toast from "react-hot-toast";

const AddProduct = () => {

    const [productData, setProductData] = useState({
        name: "",
        stock: "",
        description: "",
        price: "",
        category: "",
        image: null,
    });

    const handleInputChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddProduct = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append(
                "name",
                productData.name
            );

            formData.append(
                "desc",
                productData.description
            );

            formData.append(
                "price",
                productData.price
            );

            formData.append(
                "stock",
                productData.stock
            );

            formData.append(
                "category",
                productData.category
            );

            productData.images.forEach((image) => {
                formData.append("images", image);
            });

            const response =
                await addProduct(formData);


            toast.success(response.data.message);

            setProductData({
                name: "",
                stock: "",
                description: "",
                price: "",
                category: "",
                images: [],
            });


        } catch (error) {

            console.log(error);


        }
    };

    return (
        <>
            {/* Wrapper */}

            <form className="bg-(--primary-color) p-4 rounded-2xl"
                onSubmit={handleAddProduct}>

                {/* Name and Stock Container*/}
                <div className="grid grid-cols-2 gap-4 mb-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="name">
                            Product Name
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            type="text"
                            value={productData.name}
                            onChange={handleInputChange}
                            id="name" name="name"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="stock">
                            Stock
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            type="number"
                            value={productData.stock}
                            onChange={handleInputChange}
                            id="stock" name="stock"
                        />
                    </div>
                </div>

                {/* Short Description */}
                {/* <div className="mt-4">
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="shortDescription">
                            Short Description
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            id="shortDescription" name="shortDescription" rows="3"
                        ></input>
                    </div> */}

                {/*  Description */}
                <div className="mt-4">
                    <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="longDescription">
                        Description
                    </label>
                    <textarea
                        className="w-full shadow-(--box-shadow) p-2"
                        id="description" name="description" rows="6"
                        value={productData.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Price and Category */}
                <div className="flex gap-4 items-center mt-4">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            type="number" id="price" name="price"
                            value={productData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="category">
                            Category
                        </label>
                        <select
                            className="w-full shadow-(--box-shadow) p-2"
                            id="category" name="category"
                            value={productData.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="groceries">Groceries</option>
                        </select>
                    </div>
                </div>

                {/* Image Upload */}
                <div className="mt-4">
                    <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="image">
                        Product Image
                    </label>
                    <input
                        className="w-full shadow-(--box-shadow) p-2"
                        type="file" id="image" name="image"
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                images: Array.from(e.target.files),
                            })
                        }
                    />
                </div>

                <div>
                    <button className="bg-(--accent-color) text-white w-full px-4 py-2 rounded mt-4">
                        Add Product
                    </button>
                </div>

            </form>


        </>


    );
};

export default AddProduct;