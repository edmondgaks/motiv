"use client";
import { Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  const data = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
  ];
  const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data2 = [
    {
      "name": "1PM",
      "uv": 4000,
    },
    {
      "name": "2PM",
      "uv": 3000,
    },
    {
      "name": "3PM",
      "pv": 2000,
    },
    {
      "name": "4PM",
      "uv": 2780,
    },
    {
      "name": "5PM",
      "uv": 1890,
    },
    {
      "name": "6PM",
      "uv": 2390,
    },
    {
      "name": "7PM",
      "uv": 3490,
    }
  ]
  const data3 = [
    {
      "name": "7 am",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "9 am",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "11 am",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "1 pm",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "3 pm",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "5 pm",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "7 pm",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "9 pm",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  
  return (
    <div className="w-full h-full bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-4 overflow-x-hidden overflow-y-auto">
      <div className="w-full flex flex-row gap-x-5 items-center">
        <div className="flex flex-col  bg-[#A66FF0] w-[24%] rounded-md relative justify-center p-6 items-center">
          <Image src={"/energy.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-white">Energy</h1>    
          <PieChart width={400} height={160}>
            <Pie
            data={data1}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-xl text-white absolute left-36 top-44">45%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md relative gap-4 w-[24%] rounded-md justify-center p-4 items-center">
          <Image src={"/range.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Range</h1>  
          <PieChart width={400} height={160}>
            <Pie
            data={data1}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-xl text-black absolute left-36 top-48">151k%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md relative gap-4 w-[24%] rounded-md justify-center p-4 items-center">
          <Image src={"/fluid.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Break Fluid</h1>  
          <PieChart width={400} height={160}>
            <Pie
            data={data1}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-xl text-black absolute left-40 top-48">9%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md gap-4 w-[24%] relative rounded-md justify-center p-4 items-center">
          <Image src={"/tire.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Tire Wear</h1>  
          <PieChart width={400} height={160}>
            <Pie
            data={data1}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-xl text-black absolute left-40 top-48">25%</h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between gap-4 items-center">
        <div className="flex flex-col bg-white p-4 gap-3 w-[50%] rounded-md">
          <h1 className="font-semibold text-medium">Miles Statistics</h1>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <button className="text-xs text-white py-2 px-3 font-medium rounded-full bg-[#2884FF]">Day</button>
              <button className="text-xs text-black font-medium">Week</button>
              <button className="text-xs text-black font-medium">Month</button>
            </div>
            <h1 className="font-semibold text-sm">256 Miles</h1>
          </div>
          <BarChart width={600} height={250} data={data2} className="text-gray-100">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            
            <Bar dataKey="pv" fill="#2884FF" />
            <Bar dataKey="uv" fill="#F4F5F9" />
          </BarChart>
        </div>
        <div className="flex flex-col bg-white p-4 gap-3 w-[50%] rounded-md">
          <h1 className="font-semibold text-medium">Car Statistics</h1>
          <div className="flex flex-row w-full justify-between items-center">
            <h1 className="font-semibold text-sm">20 February 2022</h1>
            <div className="flex flex-row items-center gap-2">
              <button className="text-xs text-white py-2 px-3 font-medium rounded-full bg-[#FF764C]">Day</button>
              <button className="text-xs text-black font-medium">Week</button>
              <button className="text-xs text-black font-medium">Month</button>
            </div>
          </div>
          <AreaChart width={640} height={250} data={data3}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFEBE0" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FFFEFD" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#FF764C" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
      </div>
    </div>
  )
}

export default Dashboard