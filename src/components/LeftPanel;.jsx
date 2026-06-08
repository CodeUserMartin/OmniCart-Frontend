import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import { ChevronDown } from "lucide-react";


const LeftPanel = () => {


    const [productManagementOpen, setProductManagementOpen] = useState(false);
    const [orderManagementOpen, setOrderManagementOpen] = useState(false);
    const [inventoryManagementOpen, setInventoryManagementOpen] = useState(false);


    return (
        <div className="w-1/5 p-4 h-[calc(100vh-90px)] bg-gray-100">

            <div className="bg-white p-4 rounded shadow flex flex-col">

                <li
                    onClick={() => setProductManagementOpen(!productManagementOpen)}
                    className="cursor-pointer font-semibold text-blue-500"
                >

                    <div className="flex items-center gap-2 justify-center">
                        <span>
                            Product Management
                        </span>
                        <ChevronDown />
                    </div>
                </li>

                {
                    productManagementOpen && (
                        <>
                            <Link
                                to="/seller-dashboard/add-product"
                                className="pl-4 text-gray-500"
                            >
                                Add Product
                            </Link>

                            <Link
                                to="/seller-dashboard/update-product"
                                className="pl-4 text-gray-500"
                            >
                                Update Product
                            </Link>

                            <Link
                                to="/seller-dashboard/delete-product"
                                className="pl-4 text-gray-500"
                            >
                                Delete Product
                            </Link>
                        </>
                    )
                }

                <li onClick={() => setOrderManagementOpen(!orderManagementOpen)} className="cursor-pointer font-semibold text-blue-500 mt-4">

                    <div className="flex items-center gap-2 justify-center">
                        <span>
                            Order Management
                        </span>
                        <ChevronDown />
                    </div>

                </li>

                {
                    orderManagementOpen && (
                        <>
                            <Link
                                to="/seller-dashboard/new-orders"
                                className="pl-4 text-gray-500"
                            >
                                New Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/cancelled-orders"
                                className="pl-4 text-gray-500"
                            >
                                Cancelled Orders
                            </Link>
                        </>
                    )
                }

                <li onClick={() => setInventoryManagementOpen(!inventoryManagementOpen)} className=" font-semibold text-blue-500 mt-4">

                    <div className="flex items-center gap-2 justify-center">
                        <span>
                            Inventory Management
                        </span>
                        <ChevronDown />
                    </div>
                </li>

                {
                    inventoryManagementOpen && (
                        <>
                            <Link
                                to="/seller-dashboard/my-products"
                                className="pl-4 text-gray-500"
                            >
                                My Products
                            </Link>
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default LeftPanel;