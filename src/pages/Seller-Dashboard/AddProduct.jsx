const AddProduct = () => {
    return (
        <>
            {/* Wrapper */}
            <div>

                {/* Name and Stock Container*/}
                <div className="grid grid-cols-2 gap-4 mb-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="name">
                            Product Name
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            type="text" id="name" name="name"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="stock">
                            Stock
                        </label>
                        <input
                            className="w-full shadow-(--box-shadow) p-2"
                            type="number" id="stock" name="stock"
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

                {/* Long Description */}
                <div className="mt-4">
                    <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="longDescription">
                        Description
                    </label>
                    <textarea
                        className="w-full shadow-(--box-shadow) p-2"
                        id="longDescription" name="longDescription" rows="6"
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
                        />
                    </div>
                    <div className="">
                        <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="category">
                            Category
                        </label>
                        <select
                            className="w-full shadow-(--box-shadow) p-2"
                            id="category" name="category"
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="Grocery">Groceries</option>
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
                    />
                </div>

                <div>
                    <button className="bg-(--accent-color) text-white w-full px-4 py-2 rounded mt-4">
                        Add Product
                    </button>
                </div>

            </div>
        </>


    );
};

export default AddProduct;