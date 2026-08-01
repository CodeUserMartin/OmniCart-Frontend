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
            <div className="text-white font-2xl">
                Loading Dashboard...
            </div>
        );
    }

    return (
        <>

            {/* Wrapper */}
            <div className="flex flex-col gap-4 p-4 w-full">

                {/* Seller Info Container */}
                <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2 p-4 rounded shadow w-full bg-(--primary-color)">

                    {/* Seller Name */}
                    <div>
                        <span className="text-2xl font-bold uppercase">{dashboard?.sellerName}</span>
                    </div>

                    {/* Seller Description */}
                    <div>
                        <p className="text-gray-600 uppercase">
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
                <div className="flex lg:flex-row flex-col gap-2  rounded shadow w-full bg-(--primary-color) ">

                    {/* Seller Pie Chart & Data */}
                    <div className="flex lg:flex-row flex-col gap-4 p-4 rounded lg:w-3/4">

                        {/* Pie Chart Container */}
                        <div className="flex justify-center items-center rounded h-full p-2 shadow-(--box-shadow)">


                            {/* <div className="w-88 h-88 bg-gray-200 rounded-full flex items-center justify-center">

                            </div> */}

                            <SellerPieChart
                                dashboard={dashboard} />


                        </div>

                        {/* Pie Chart Data Container */}
                        <div className=" flex  flex-col items-start p-4 rounded shadow-(--box-shadow)  bg-(--primary-color) text-right">

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
                                🟢 Delivered Orders:
                                {" "}
                                {dashboard?.deliveredOrders}
                            </p>

                            <p>
                                🔴 Cancelled Orders:
                                {" "}
                                {dashboard?.cancelledOrders}
                            </p>
                            <p>
                                🟠 Confirmed Orders:
                                {" "}
                                {dashboard?.confirmedOrders}
                            </p>
                        </div>

                    </div>

                    {/* Seller Inventory Data */}
                    <div className="flex flex-col gap-2 p-4 rounded shadow-(--box-shadow) bg-(--primary-color) items-start">
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
                <div className="flex justify-between items-center gap-4 p-4 rounded  w-full bg-(--primary-color)">

                    {/* Current Date */}
                    <div>

                        <p className="text-gray-600 uppercase">
                            Current Date
                        </p>

                        <p className="font-semibold text-xl">
                            {new Date().toLocaleDateString()}
                        </p>

                    </div>

                    {/* Total Revenue */}
                    <div>

                        <p className="text-gray-600 uppercase">
                            Total Revenue
                        </p>

                        <span className="text-3xl font-bold text-green-600">
                            ₹{dashboard?.totalRevenue}
                        </span>

                    </div>

                </div>



            </div>

        </>
    )
}

export default DashboardAnalysis