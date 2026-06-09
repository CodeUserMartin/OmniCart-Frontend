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
                {/* Wrapper */}
                <div className="bg-white p-2 flex-1">

                    <div className="flex items-center justify-center mb-4 bg-(--accent-color-2) rounded-xl h-full">

                        {/* Main Content Container */}
                        <div className="bg-(--primary-color) p-4 rounded-xl w-3xl">

                            {/* Outlet for nested routes */}
                            <Outlet />

                        </div>


                    </div>


                </div>

            </div>

        </div>
    );
};

export default SellerDashboardPage;