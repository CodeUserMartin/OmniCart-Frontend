import LeftPanel from "../components/LeftPanel;.jsx";
import Navbar from "../components/Navbar.jsx";

import { Outlet } from "react-router-dom";

const SellerDashboardPage = () => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            <div className="flex">

                {/* Left Panel */}
               <LeftPanel />

                {/* Right Panel */}
                <div className="bg-white p-4 flex-1">
                    <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
                    <p>Welcome to your dashboard! Here you can manage your products, view orders, and track your sales.</p>
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default SellerDashboardPage;