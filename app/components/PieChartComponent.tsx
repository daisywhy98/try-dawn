"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function PieChartComponent() {
  const [value, setValue] = useState(50); // 默认值 50

  // 处理输入
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value, 10);
    if (isNaN(newValue)) newValue = 0;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  };

  // 数据
  const data = [
    { name: "输入值", value },
    { name: "剩余", value: 100 - value },
  ];

  // 颜色
  const COLORS = ["#4CAF50", "#ddd"];

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min="0"
        max="100"
        className="p-2 border rounded-lg text-center w-24"
      />
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
