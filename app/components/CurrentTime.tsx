'use client';
import { useState, useEffect } from "react";

const CurrentTime = () => {
    const [curTime, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        // 每秒更新一次时间
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // 组件卸载时清除定时器
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row items-center  gap-2">
            <div className="text-xl font-bold text-white">Current Time:</div>
            <div className="text-xl font-bold text-white" suppressHydrationWarning>{(curTime||new Date()).toLocaleTimeString()}</div>
        </div>
    );
}

export default CurrentTime;