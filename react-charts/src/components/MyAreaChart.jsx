import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "VJ", product1: 1890, product2: 4123 },
  { name: "VKK", product1: 290, product2: 513 },
  { name: "Vamff", product1: 590, product2: 513 },
  { name: "Vafffm", product1: 950, product2: 413 },
  { name: "Unknown", product1: 920, product2: 613 }, 
  { name: "Dam", product1: 190, product2: 413 },
  { name: "Gam", product1: 1290, product2: 2313 },
];

const MyAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={500} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area dataKey="product1" stroke="yellow" fill="black" stackId="1" />
        <Area type="monotone" dataKey="product2" stroke="black" fill="palegreen" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "greenyellow", padding: "10px", fontFamily: "monospace" }}>
        <h3>Product 1: {payload[0]?.value}</h3>
        <h3>Product 2: {payload[1]?.value}</h3>
      </div>
    );
  }
  return null;
};

export default MyAreaChart;
