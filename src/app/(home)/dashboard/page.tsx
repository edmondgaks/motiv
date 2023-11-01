"use client";
import { Lightning, RedoIcon, SettingsIcon } from '@/components/icons';
import { Calendar, RefreshCcwDot, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PieChart, Pie, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const energy = [
    { name: 'Group A', value: 45 },
    { name: 'Group B', value: 55 },
  ]
  const COlORS1 = ['#fff', '#B37EFC'];
  const range = [
    { name: 'Group A', value: 50 },
    { name: 'Group B', value: 50 },
  ]
  const COlORS2 = ['#FF7E86', '#F4F5F9'];
  const fluid = [
    { name: 'Group A', value: 9 },
    { name: 'Group B', value: 91 },
  ]
  const COlORS3 = ['#A162F7', '#F4F5F9'];
  const tire = [
    { name: 'Group A', value: 25 },
    { name: 'Group B', value: 75 },
  ]
  const COlORS4 = ['#F6CC0D', '#F4F5F9'];
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
    <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3 overflow-x-hidden">
      <div className="w-full flex flex-row gap-x-5 items-center">
        <div className="flex flex-col bg-[#A66FF0] w-[24%] rounded-md relative justify-center p-6 items-center">
          <Image src={"/energy.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-white">Energy</h1>    
          <PieChart width={430} height={100}>
            <Pie
            data={energy}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {energy.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COlORS1[index % COlORS1.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-semibold -translate-y-4 translate text-2xl text-white">45%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md relative gap-2 w-[24%] rounded-md justify-center p-4 items-center">
          <Image src={"/range.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Range</h1>  
          <PieChart width={430} height={100}>
            <Pie
            data={range}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {range.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COlORS2[index % COlORS2.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-2xl text-black -translate-y-6">151k%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md relative gap-2 w-[24%] rounded-md justify-center p-4 items-center">
          <Image src={"/fluid.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Break Fluid</h1>  
          <PieChart width={430} height={100}>
            <Pie
            data={fluid}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {range.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COlORS3[index % COlORS3.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-2xl text-black -translate-y-6">9%</h1>
        </div>
        <div className="flex flex-col bg-white shadow-md gap-2 w-[24%] relative rounded-md justify-center p-4 items-center">
          <Image src={"/tire.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Tire Wear</h1>  
          <PieChart width={430} height={100}>
            <Pie
            data={tire}
            cx={210}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value">
            {tire.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COlORS4[index % COlORS4.length]} />
            ))}
          </Pie>
          </PieChart>
          <h1 className="font-bold text-2xl text-black -translate-y-6">25%</h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between gap-4 items-center">
        <div className="flex flex-col bg-white p-4 gap-3 w-[50%] rounded-md">
          <h1 className="font-semibold text-base">Miles Statistics</h1>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <button className="text-xs text-white py-2 px-3 font-medium rounded-full bg-[#2884FF]">Day</button>
              <button className="text-xs text-black font-medium">Week</button>
              <button className="text-xs text-black font-medium">Month</button>
            </div>
            <h1 className="font-semibold text-sm">256 Miles</h1>
          </div>
          {/* <ResponsiveContainer width={600} height="100%"> */}
            <BarChart width={550} height={250} data={data2} className="text-gray-100">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="pv" fill="#2884FF" />
              <Bar dataKey="uv" fill="#F4F5F9" />
            </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="flex flex-col bg-white p-4 gap-3 w-[50%] rounded-md">
          <h1 className="font-semibold text-base">Car Statistics</h1>
          <div className="flex flex-row w-full justify-between items-center">
            <h1 className="font-semibold text-sm">20 February 2022</h1>
            <div className="flex flex-row items-center gap-2">
              <button className="text-xs text-white py-2 px-3 font-medium rounded-full bg-[#FF764C]">Day</button>
              <button className="text-xs text-black font-medium">Week</button>
              <button className="text-xs text-black font-medium">Month</button>
            </div>
          </div>
          {/* <ResponsiveContainer width={700} height="100%"> */}
            <AreaChart width={550} height={250} data={data3}
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
          {/* </ResponsiveContainer> */}
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-4">
        <div className="flex flex-col justify-center gap-2 w-full bg-[#E1DFA4] rounded-md p-6">
          <div className="flex flex-row items-center justify-start gap-3">
            <RefreshCcwDot size={20} color="#72767C" strokeWidth={2.75} />
            <h1 className="text-sm font-semibold">64% Recommended</h1>
          </div>
          <Image src={"/car.png"} width={300} height={300} alt="Mini Copper" />
          <h1 className="text-sm font-semibold">Mini Copper</h1>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex gap-3 items-center">
              <RedoIcon />
              <p className="text-xs font-light text-gray-600">132K</p>
              <SettingsIcon />
              <Lightning />
            </div>
            <p className="text-sm font-light text-gray-600">$32/h</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full bg-[#E3ECF1] rounded-md p-6">
          <div className="flex flex-row items-center justify-start gap-3">
            <RefreshCcwDot size={20} color="#72767C" strokeWidth={2.75} />
            <h1 className="text-sm font-semibold">74% Recommended</h1>
          </div>
          <Image src={"/suzuki.png"} width={300} height={300} alt="Mini Copper" />
          <h1 className="text-sm font-semibold">Porshe 911 Carrera</h1>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex gap-3 items-center">
              <RedoIcon />
              <p className="text-xs font-light text-gray-600">130k</p>
              <SettingsIcon />
              <Lightning />
            </div>
            <p className="text-sm font-light text-gray-600">$28/h</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full bg-[#F4E3E5] rounded-md p-4">
          <div className="flex flex-row items-center justify-start gap-3">
            <RefreshCcwDot size={20} color="#72767C" strokeWidth={2.75} />
            <h1 className="text-sm font-semibold">84% Recommended</h1>
          </div>
          <Image src={"/bmw.png"} width={300} height={300} alt="Mini Copper" />
          <h1 className="text-sm font-semibold">Porshe 911 Carrera</h1>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex gap-3 items-center">
              <RedoIcon />
              <p className="text-xs font-light text-gray-600">150l</p>
              <SettingsIcon />
              <Lightning />
            </div>
            <p className="text-sm font-light text-gray-600">$45/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard