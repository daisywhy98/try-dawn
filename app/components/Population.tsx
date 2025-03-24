"use client";

import { useState, useEffect } from "react";

const BASE_POPULATION = 8255338000; // 80 亿（最新数据请查阅权威来源）
const BASE_DATE = new Date("2025-01-01T00:00:00Z"); // 这个数据的更新时间
const GROWTH_RATE_PER_SECOND = 2.6; // 全球人口每秒增长 ≈ 2.6 人

// 计算当前实际人口数
const calculateCurrentPopulation = (): number => {
  const now = new Date();
  const secondsElapsed = (now.getTime() - BASE_DATE.getTime()) / 1000;
  return BASE_POPULATION + Math.floor(secondsElapsed * GROWTH_RATE_PER_SECOND);
};

export default function Population() {
  const [population, setPopulation] = useState<number>(calculateCurrentPopulation());

  useEffect(() => {

    const interval = setInterval(() => {
      setPopulation(calculateCurrentPopulation());
    }, 1000);

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="text-2xl font-bold text-white">🌍 Current Population:</div>
      <div className="text-xl text-white font-semibold">
        {population.toLocaleString()}
      </div>
    </div>
  );
}
