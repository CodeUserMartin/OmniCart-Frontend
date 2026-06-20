import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function SellerPieChart({ dashboard }) {

    //Data
    const data = [
        {
            name: "Pending Orders",
            value: dashboard?.pendingOrders || 0
        },
        {
            name: "Confirmed Orders",
            value: dashboard?.confirmedOrders || 0
        },
        {
            name: "Shipped Orders",
            value: dashboard?.shippedOrders || 0
        },
        {
            name: "Delivered Orders",
            value: dashboard?.deliveredOrders || 0
        },
        {
            name: "Cancelled Orders",
            value: dashboard?.cancelledOrders || 0
        }
    ];

    // Colors for each slice
    const COLORS = [
        "#facc15", // Pending
        "#fb923c", // Confirmed
        "#3b82f6", // Shipped
        "#22c55e", // Delivered
        "#ef4444"  // Cancelled
    ];

    return (
        <div className="w-full flex flex-col gap-3 justify-center p-4 rounded shadow">

            <PieChart width={350} height={350}>

                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />

            </PieChart>

        </div>
    );
}