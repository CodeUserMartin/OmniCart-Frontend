import LeftPanel from "../components/LeftPanel;.jsx";
import Navbar from "../components/Navbar.jsx";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import { Menu } from "lucide-react"

const SellerDashboardPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* <div className="lg:hidden m-2">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="w-full flex items-center justify-between rounded-lg bg-(--secondary-color) text-white px-4 py-3"
                >
                    <span className="flex items-center gap-2">
                        <Menu />
                        <span className="font-semibold">
                            Seller Dashboard
                        </span>
                    </span>

                    <span>{">"}</span>
                </button>
            </div> */}

            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
            )}

            <div className="lg:flex">

                {/* Left Panel */}
                <LeftPanel
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                {/* Right Panel */}
                {/* Wrapper */}
                <div className="bg-white p-2 flex-1">

                    <div className="bg-(--accent-color-2) p-3 lg:p-4 rounded-xl w-full h-full flex flex-col">

                        {/* Mobile Screen Panel */}
                        <div className="lg:hidden mb-4 mt-2 p-2">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="w-full flex items-center justify-between rounded-lg bg-gray-800 text-white px-4 py-3"
                            >
                                <span className="flex items-center gap-2">
                                    <Menu />
                                    <span className="font-semibold">
                                        Seller Dashboard
                                    </span>
                                </span>

                            </button>
                        </div>

                        {/* Outlet for nested routes */}
                        <Outlet />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SellerDashboardPage;