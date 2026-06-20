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

                    <div className="bg-(--accent-color-2) p-4 rounded-xl w-full h-full flex flex-col">

                        {/* Outlet for nested routes */}
                        <Outlet />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SellerDashboardPage;