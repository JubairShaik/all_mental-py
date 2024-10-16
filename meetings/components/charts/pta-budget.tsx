'use client'

import { Cell, Pie, PieChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
    { category: "Arts Programming", percentage: 33 },
    { category: "Teaching Assistants", percentage: 33 },
    { category: "School Trips", percentage: 17 },
    { category: "Classroom & School Support", percentage: 17 },
];

const chartConfig = {
    percentage: {
        label: "Percentage",
        color: "#2563eb",
    },
} satisfies ChartConfig;

const ptaBudgetData = [
    { name: "Arts Programming", value: 33 },
    { name: "Teaching Assistants", value: 33 },
    { name: "School Trips", value: 17 },
    { name: "Classroom & School Support", value: 17 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const PTABudgetChart = () => {
    return (
        <div>
            <ChartContainer config={chartConfig}>
                <PieChart>
                    <Pie
                        data={ptaBudgetData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                    >
                        {ptaBudgetData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    );
};
