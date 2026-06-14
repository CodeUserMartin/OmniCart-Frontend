import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function SellerPieChart() {

    // Demo data
    const data = [
        { name: "Pending Orders", value: 12 },
        { name: "Shipped Orders", value: 6 },
        { name: "Delivered Orders", value: 25 },
        { name: "Cancelled Orders", value: 3 },
    ];

    // Colors for each slice
    const COLORS = ["#facc15", "#3b82f6", "#22c55e", "#ef4444"];

    return (
        <div className="w-full flex justify-center items-center">

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