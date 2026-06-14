import SellerPieChart from "../../components/SellerPieChart";

const DashboardAnalysis = () => {
    return (
        <>

            {/* Wrapper */}
            <div className="flex flex-col gap-4 p-4 w-full">

                {/* Seller Info Container */}
                <div className="flex items-center justify-between gap-2 p-4 rounded shadow w-full bg-amber-200">

                    {/* Seller Name */}
                    <div>
                        <span className="text-2xl font-bold">Seller Name</span>
                    </div>

                    {/* Seller Description */}
                    <div>
                        <p className="text-gray-600">Store Name</p>
                        <p className="text-gray-600">Store Addresss</p>
                        <p className="text-gray-600">Store Contact</p>
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

                            <SellerPieChart />


                        </div>

                        {/* Pie Chart Data Container */}
                        <div className=" flex flex-col items-center p-4 rounded shadow  bg-amber-200 text-right">

                            <p>🔵 Shipped Orders: 6</p>
                            <p>🟡 Pending Orders: 12</p>
                            <p>🔴 Cancelled Orders: 3</p>
                            <p>🟢 Delivered Orders: 25</p>


                        </div>

                    </div>

                    {/* Seller Inventory Data */}
                    <div className="flex flex-col gap-2 p-4 rounded shadow bg-amber-200 text-center">
                        <div>
                            <h2 className="text-lg font-bold">Inventory</h2>
                        </div>

                        <div>
                            <p>Product Registered: X</p>
                            <p>Product Delivered: X</p>
                            <p>Product Cancelled: X</p>
                        </div>
                    </div>

                </div>

                {/* Seller Revenue Data Container */}
                <div className="flex justify-between items-center gap-4 p-4 rounded shadow w-full bg-amber-200">

                    {/* Current Date */}
                    <div>
                        <p className="text-gray-600">Current Date</p>
                    </div>

                    {/* Total Revenue */}
                    <div>
                        <p className="text-gray-600">Total Revenue</p>
                        <span>₹X,XXX</span>
                    </div>

                </div>



            </div>

        </>
    )
}

export default DashboardAnalysis