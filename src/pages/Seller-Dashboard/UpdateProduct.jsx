import ResultProductCard from "../../components/ResultProductCard.jsx";
import SearchBar from "../../components/SearchBar.jsx";

const UpdateProduct = () => {
    return (
        <>

            {/* Search Bar */}
            <div>
                <SearchBar />
            </div>

            {/* Update Product Form Container */}
            <div className="bg-white p-6 rounded shadow-md mt-6">

                {/* Result Display */}
                <ResultProductCard />

                {/* Update Form */}
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                        {/* Product Name */}
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input type="text" id="productName" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Product Stock */}
                        <div>
                            <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">Product Stock</label>

                            <input type="number" id="productStock" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                    </div>

                    {/* Product Description */}
                    <div className="mt-4">
                        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Product Description</label>

                        <textarea id="productDescription" rows={3} className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-(--box-shadow) focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                </div>

                {/* Update Button */}
                <div className="bg-(--accent-color) text-white p-2 rounded mt-4 text-center cursor-pointer uppercase font-bold">
                    <button>Update Product</button>
                </div>

            </div>
        </>
    );
};

export default UpdateProduct;