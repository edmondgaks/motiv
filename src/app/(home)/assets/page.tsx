"use client";
import Image from "next/image";
import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Assets = () => {
    const data = [
        {
          "name": "12/9",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "13/9",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "14/9",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "15/9",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "16/9",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "17/9",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "18/9",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
            "name": "19/9",
            "uv": 4000,
            "pv": 4300,
            "amt": 2100
          }
      ]
    return (
        <div className="w-full h-fit bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3">
            <h1 className="font-bold text-2xl">Assets</h1>
            <div className="w-full flex flex-row gap-4 w-full">
                <div className="w-[30%] h-[80vh] flex flex-col bg-[#438FFE] p-4 gap-4 rounded-md">
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[#C6DCFC] text-base">Fuel Usage</h1>
                            <h1 className="font-semibold text-xl text-white">2903.89 Ltr</h1>
                        </div>
                        <div className="w-[2px] h-14 bg-[#579BFF] ml-14"></div>
                        <div className="flex flex-col justify-center items-end">
                            <h1 className="text-[#C6DCFC] text-base">KM Driven</h1>
                            <h1 className="font-semibold text-xl text-white">2903.89 Ltr</h1>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[#C6DCFC] text-base">Total Cost</h1>
                            <h1 className="font-semibold text-xl text-white">$3,00,290.00</h1>
                        </div>
                        <div className="w-[2px] h-14 bg-[#579BFF] ml-14"></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[#C6DCFC] text-base">Top Speed</h1>
                            <h1 className="font-semibold text-xl text-white">$5.2K</h1>
                        </div>
                    </div>
                    <Image src={"/assetCar.png"} width={300} height={300} alt="AssetCar" className="absolute translate-x-10 translate-y-32" />
                </div>
                <div className="w-[70%] h-[50vh] flex flex-col gap-4 p-6 rounded-md bg-white">
                    <div className="flex flex-row w-full justify-between">
                        <h1 className="font-semibold text-lg">Activity</h1>
                        <p className="text-base text-gray-400 font-medium">View All</p>
                    </div>
                        <AreaChart width={900} height={300} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                </div>
            </div>
        </div>
    )
}

export default Assets