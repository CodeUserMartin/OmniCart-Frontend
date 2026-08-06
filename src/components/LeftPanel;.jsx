import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import { ChevronDown, ChevronUp, X } from "lucide-react";


const LeftPanel = ({
    isSidebarOpen,
    setIsSidebarOpen
}) => {


    const [productManagementOpen, setProductManagementOpen] = useState(false);
    const [orderManagementOpen, setOrderManagementOpen] = useState(false);
    const [inventoryManagementOpen, setInventoryManagementOpen] = useState(false);


    return (
        <div className={`
        fixed
        top-0
        left-0
        h-full
        w-72
        bg-(--secondary-color)
        z-50
        transform
        transition-transform
        duration-300

        ${isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }

        lg:static
        lg:translate-x-0
        lg:w-1/5
        lg:min-h-[calc(100vh-88px)]
    `}>

            {/* Mobile Close Navigation Button */}
            <div className="lg:hidden p-3 border-b border-gray-700">
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-full flex items-center justify-between rounded-lg bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 transition-colors"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-xl">←</span>
                        <span className="font-semibold">
                            Close Menu
                        </span>
                    </span>

                </button>
            </div>

            <div className="p-4 rounded shadow flex flex-col w-full h-full">

                <div className="w-full hover:bg-gray-800 cursor-pointer py-3 px-2">
                    <Link
                        to="/seller-dashboard/dashboard"
                        className="pl-4 text-white  "
                    >
                        Dashboard
                    </Link>
                </div>

                <button
                    onClick={() => setProductManagementOpen(!productManagementOpen)}
                    className="cursor-pointer font-semibold mt-4 text-white  p-2 list-none w-full hover:bg-gray-800 "
                >

                    <div className="flex items-center gap-2 justify-around">
                        <span>
                            Product Management
                        </span>
                        {
                            productManagementOpen
                                ? <ChevronUp />
                                : <ChevronDown />
                        }
                    </div>
                </button>

                {
                    productManagementOpen && (
                        <div className="flex flex-col gap-4 mt-3 w-full">
                            <Link
                                to="/seller-dashboard/add-product"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Add Product
                            </Link>

                            <Link
                                to="/seller-dashboard/update-product"
                                className="pl-4 text-white  py-3 px-2  hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Update Product
                            </Link>

                            <Link
                                to="/seller-dashboard/delete-product"
                                className="pl-4 text-white  py-3 px-2  hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Delete Product
                            </Link>
                        </div>
                    )
                }

                <button onClick={() => setOrderManagementOpen(!orderManagementOpen)} className="cursor-pointer font-semibold text-white rounded mt-4 list-none">

                    <div className="flex items-center gap-2 justify-around cursor-pointer p-2 text-white hover:bg-gray-800">
                        <span>
                            Order Management
                        </span>
                        {
                            orderManagementOpen
                                ? <ChevronUp />
                                : <ChevronDown />
                        }
                    </div>
                </button>

                {
                    orderManagementOpen && (
                        <div className="flex flex-col gap-4 mt-3 ">
                            <Link
                                to="/seller-dashboard/new-orders"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                New Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/confirmed-orders"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Confirmed Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/shipped-orders"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Shipped Orders
                            </Link>
                            <Link
                                to="/seller-dashboard/delivered-orders"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Delivered Orders
                            </Link>
                            <Link
                                to="/seller-dashboard/cancelled-orders"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
                            >
                                Cancelled Orders
                            </Link>
                        </div>
                    )
                }

                <button onClick={() => setInventoryManagementOpen(!inventoryManagementOpen)} className="cursor-pointer font-semibold text-white bg-[--secondary-color] p-2 rounded mt-2 list-none ">

                    <div className="flex items-center gap-2 p-2 justify-around cursor-pointer text-white hover:bg-gray-800">
                        <span>
                            Inventory Management
                        </span>
                        {
                            inventoryManagementOpen
                                ? <ChevronUp />
                                : <ChevronDown />

                        }
                    </div>
                </button>

                {
                    inventoryManagementOpen && (
                        <div className="flex flex-col gap-4 mt-3">
                            <Link
                                to="/seller-dashboard/my-products"
                                className="pl-4 text-white py-3 px-2 hover:bg-gray-800 cursor-pointer border-b"
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