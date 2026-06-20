import SellerPieChart from "../../components/SellerPieChart";
import { useSellerDashboard }
    from "../../hooks/useSellerDashboard.js";

const DashboardAnalysis = () => {

    const {
        dashboard,
        loading
    } = useSellerDashboard();

    if (loading) {
        return (
            <div>
                Loading Dashboard...
            </div>
        );
    }

    return (
        <>

            {/* Wrapper */}
            <div className="flex flex-col gap-4 p-4 w-full">

                {/* Seller Info Container */}
                <div className="flex items-center justify-between gap-2 p-4 rounded shadow w-full bg-amber-200">

                    {/* Seller Name */}
                    <div>
                        <span className="text-2xl font-bold">{dashboard?.sellerName}</span>
                    </div>

                    {/* Seller Description */}
                    <div>
                        <p className="text-gray-600">
                            {dashboard?.storeName}
                        </p>

                        <p className="text-gray-600">
                            {dashboard?.storeAddress}
                        </p>

                        <p className="text-gray-600">
                            {dashboard?.storeContact || "Not Provided"}
                        </p>
                    </div>

                </div>

                {/* Seller Analysis Data Container */}
                <div className="flex gap-4 p-4 rounded shadow w-full bg-(--secondary-color)">

                    {/* Seller Pie Chart & Data */}
                    <div className="flex  gap-4 p-4 rounded w-3/4">

                        {/* Pie Chart Container */}
                        <div className="flex justify-center items-center rounded h-full p-2">


                            {/* <div className="w-88 h-88 bg-gray-200 rounded-full flex items-center justify-center">

                            </div> */}

                            <SellerPieChart
                                dashboard={dashboard} />


                        </div>

                        {/* Pie Chart Data Container */}
                        <div className=" flex flex-col items-center p-4 rounded shadow  bg-amber-200 text-right">

                            <p>
                                🔵 Shipped Orders:
                                {" "}
                                {dashboard?.shippedOrders}
                            </p>

                            <p>
                                🟡 Pending Orders:
                                {" "}
                                {dashboard?.pendingOrders}
                            </p>

                            <p>
                                🟠 Confirmed Orders:
                                {" "}
                                {dashboard?.confirmedOrders}
                            </p>

                            <p>
                                🔴 Cancelled Orders:
                                {" "}
                                {dashboard?.cancelledOrders}
                            </p>

                            <p>
                                🟢 Delivered Orders:
                                {" "}
                                {dashboard?.deliveredOrders}
                            </p>


                        </div>

                    </div>

                    {/* Seller Inventory Data */}
                    <div className="flex flex-col gap-2 p-4 rounded shadow bg-amber-200 text-center">
                        <div>
                            <h2 className="text-lg font-bold">Inventory</h2>
                        </div>

                        <div>
                            <p>
                                Products Registered:
                                {" "}
                                {dashboard?.totalProducts}
                            </p>

                            <p>
                                Products Delivered:
                                {" "}
                                {dashboard?.totalDeliveredProducts}
                            </p>

                            <p>
                                Products Cancelled:
                                {" "}
                                {dashboard?.totalCancelledProducts}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Seller Revenue Data Container */}
                <div className="flex justify-between items-center gap-4 p-4 rounded shadow w-full bg-amber-200">

                    {/* Current Date */}
                    <div>

                        <p className="text-gray-600">
                            Current Date
                        </p>

                        <p className="font-semibold">
                            {new Date().toLocaleDateString()}
                        </p>

                    </div>

                    {/* Total Revenue */}
                    <div>

                        <p className="text-gray-600">
                            Total Revenue
                        </p>

                        <span className="text-2xl font-bold text-green-600">
                            ₹{dashboard?.totalRevenue}
                        </span>

                    </div>

                </div>



            </div>

        </>
    )
}

export default DashboardAnalysis