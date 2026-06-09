import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import { ChevronDown } from "lucide-react";


const LeftPanel = () => {


    const [productManagementOpen, setProductManagementOpen] = useState(false);
    const [orderManagementOpen, setOrderManagementOpen] = useState(false);
    const [inventoryManagementOpen, setInventoryManagementOpen] = useState(false);


    return (
        <div className="w-1/5 p-4 h-[calc(100vh-88px)] bg-(--secondary-color)">

            <div className="p-4 rounded shadow flex flex-col w-full">

                <li
                    onClick={() => setProductManagementOpen(!productManagementOpen)}
                    className="cursor-pointer font-semibold text-white bg-black p-2 list-none"
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
                        <div className="flex flex-col gap-2 mt-3 bg-(--shade-color) p-2 rounded-xl">
                            <Link
                                to="/seller-dashboard/add-product"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Add Product
                            </Link>

                            <Link
                                to="/seller-dashboard/update-product"
                                className="pl-4 text-white  py-3 px-2 bg-black rounded-xl"
                            >
                                Update Product
                            </Link>

                            <Link
                                to="/seller-dashboard/delete-product"
                                className="pl-4 text-white  py-3 px-2 bg-black rounded-xl"
                            >
                                Delete Product
                            </Link>
                        </div>
                    )
                }

                <li onClick={() => setOrderManagementOpen(!orderManagementOpen)} className="cursor-pointer font-semibold text-white bg-[--secondary-color] p-2 rounded mt-4 list-none">

                    <div className="flex items-center gap-2 justify-center cursor-pointer p-2 text-white bg-black rounded">
                        <span>
                            Order Management
                        </span>
                        <ChevronDown />
                    </div>
                </li>

                {
                    orderManagementOpen && (
                        <div className="flex flex-col gap-2 mt-3 bg-(--shade-color) p-2 rounded-xl">
                            <Link
                                to="/seller-dashboard/new-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                New Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/cancelled-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Cancelled Orders
                            </Link>
                        </div>
                    )
                }

                <li onClick={() => setInventoryManagementOpen(!inventoryManagementOpen)} className="cursor-pointer font-semibold text-white bg-[--secondary-color] p-2 rounded mt-4 list-none ">

                    <div className="flex items-center gap-2 justify-center cursor-pointer text-white bg-black rounded">
                        <span>
                            Inventory Management
                        </span>
                        <ChevronDown />
                    </div>
                </li>

                {
                    inventoryManagementOpen && (
                        <div className="flex flex-col gap-2 mt-3 bg-(--shade-color) p-2 rounded-xl">
                            <Link
                                to="/seller-dashboard/my-products"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                My Products

                            </Link>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default LeftPanel;