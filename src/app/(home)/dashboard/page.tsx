"use client";
import { Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PieChart, Pie } from 'recharts';

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
  return (
    <div className="w-full h-[90vh] bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-4">
      <div className="w-full flex flex-row gap-x-5 items-center">
        <div className="flex flex-col  bg-[#A66FF0] w-[22%] rounded-md justify-center p-6 items-center">
          <Image src={"/energy.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-white">Energy</h1>    
          <PieChart width={500} height={150}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}  fill="#82ca9d" />
          </PieChart>
        </div>
        <div className="flex flex-col bg-white shadow-md gap-4 w-[22%] rounded-md justify-center p-4 items-center">
          <Image src={"/range.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Range</h1>  
          <PieChart width={500} height={150}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}  fill="#FF7E86" />
          </PieChart>
        </div>
        <div className="flex flex-col bg-white shadow-md gap-4 w-[22%] rounded-md justify-center p-4 items-center">
          <Image src={"/fluid.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Break Fluid</h1>  
          <PieChart width={500} height={150}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}  fill="#A162F7" />
          </PieChart>
        </div>
        <div className="flex flex-col bg-white shadow-md gap-4 w-[22%] rounded-md justify-center p-4 items-center">
          <Image src={"/tire.svg"} width={50} height={50} alt="Logo" />
          <h1 className="font-semibold text-medium text-black">Tire Wear</h1>  
          <PieChart width={500} height={150}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}  fill="#F6CC0D" />
          </PieChart>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1>Miles Statistics</h1>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard