import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const AssignmentsPage = () => {
    const data = [
        { name: "Red", value: 300 },
        { name: "Blue", value: 50 },
        { name: "Yellow", value: 100 },
    ];

    const dataSell = [
        { name: "1", vietnamdong: 0 },
        { name: "2", vietnamdong: 780 },
        { name: "3", vietnamdong: 100 },
        { name: "4", vietnamdong: 123 },
        { name: "5", vietnamdong: 232 },
        { name: "6", vietnamdong: 10 },
        { name: "7", vietnamdong: 100 },
        { name: "8", vietnamdong: 23 },
        { name: "9", vietnamdong: 23 },
        { name: "10", vietnamdong: 45 },
        { name: "11", vietnamdong: 65 },
        { name: "12", vietnamdong: 21 },
    ];

    const doughnutColors = [
        "#326610",
        "#3efa79",
        "#1305bc",
        "#5b0488",
        "#81f089",
        "#91b036",
        "#119b31",
        "#a5159b",
        "#7b5cd3",
        "#d8c03d",
    ];

    return (
        <div className="p-10 sm:ml-64">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Doanh thu</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                <hr />
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-rows-1 w-full">
                <div className="w-96 text-center mt-10">
                    <PieChart width={400} height={350} aspect={1}>
                        <Pie dataKey="value" data={data} outerRadius={120} fill="#8884d8" label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={doughnutColors[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <h1>Tổng khóa học: </h1>
                    <hr className="mt-4" />
                </div>
                <div className="w-full text-center mt-10">
                    <BarChart width={400} height={350} data={dataSell} aspect={2}>
                        <XAxis dataKey="Doanh thu" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="vietnamdong" fill="#8884d8" />
                    </BarChart>
                    <h1>Tổng doanh thu: </h1>
                    <hr className="mt-4" />
                </div>
            </div>
        </div>
    );
};

export default AssignmentsPage;
