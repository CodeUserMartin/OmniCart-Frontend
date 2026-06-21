import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import { ChevronDown, ChevronUp } from "lucide-react";


const LeftPanel = () => {


    const [productManagementOpen, setProductManagementOpen] = useState(false);
    const [orderManagementOpen, setOrderManagementOpen] = useState(false);
    const [inventoryManagementOpen, setInventoryManagementOpen] = useState(false);


    return (
        <div className="w-1/5 p-4 min-h-[calc(100vh-88px)] bg-(--secondary-color)">

            <div className="p-4 rounded shadow flex flex-col w-full h-full">

                <div>
                    <Link
                        to="/seller-dashboard/dashboard"
                        className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                    >
                        Dashboard
                    </Link>
                </div>

                <button
                    onClick={() => setProductManagementOpen(!productManagementOpen)}
                    className="cursor-pointer font-semibold text-white bg-black p-2 list-none"
                >

                    <div className="flex items-center gap-2 justify-center">
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

                <button onClick={() => setOrderManagementOpen(!orderManagementOpen)} className="cursor-pointer font-semibold text-white bg-[--secondary-color] p-2 rounded mt-4 list-none">

                    <div className="flex items-center gap-2 justify-center cursor-pointer p-2 text-white bg-black rounded">
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
                        <div className="flex flex-col gap-2 mt-3 bg-(--shade-color) p-2 rounded-xl">
                            <Link
                                to="/seller-dashboard/new-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                New Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/confirmed-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Confirmed Orders
                            </Link>

                            <Link
                                to="/seller-dashboard/shipped-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Shipped Orders
                            </Link>
                            <Link
                                to="/seller-dashboard/delivered-orders"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Delivered Orders
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

                <button onClick={() => setInventoryManagementOpen(!inventoryManagementOpen)} className="cursor-pointer font-semibold text-white bg-[--secondary-color] p-2 rounded mt-4 list-none ">

                    <div className="flex items-center gap-2 justify-center cursor-pointer text-white bg-black rounded">
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
                        <div className="flex flex-col gap-2 mt-3 bg-(--shade-color) p-2 rounded-xl">
                            <Link
                                to="/seller-dashboard/my-products"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                My Products

                            </Link>
                            <Link
                                to="/seller-dashboard/re-stock-products"
                                className="pl-4 text-white py-3 px-2 bg-black rounded-xl"
                            >
                                Re-Stock Products
                            </Link>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default LeftPanel;