"use client";
import React from "react";
import Image from "next/image";
import { Layer1 } from "@/components/icons";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
const data = [
    {
      "name": "Mon",
      "uv": 10,
    },
    {
      "name": "Tue",
      "uv": 13,
    },
    {
      "name": "Wed",
      "pv": 27,
    },
    {
      "name": "Thu",
      "uv": 20,
    },
    {
      "name": "Fri",
      "uv": 19,
    },
    {
      "name": "Sat",
      "uv": 14,
    },
    {
      "name": "Sun",
      "uv": 18,
    }
  ];
  const data2 = [
    {
      "name": "Group A",
      "uv": 60,
      "fill": "#F6CC0D"
    },
    {
      "name": "Group B",
      "uv": 80,
      "fill": "#FF6370"
    },
    {
      "name": "Group C",
      "uv": 85,
      "fill": "#A162F7"
    },
    
  ]
  const impression = [
    { name: 'Group A', value: 45 },
    { name: 'Group B', value: 55 },
  ]
  const COlORS1 = ['#70CF97', '#F3F3F3'];
const SellCars = () => {
    return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3 overflow-x-hidden">
            <h1 className="font-semibold text-2xl">Sell Cars</h1>
            <div className="w-full flex flex-row items-center gap-4">
              <div className="w-[60%] bg-white py-4 px-6 h-[50vh] rounded-lg">
                <h1 className="text-2xl font-semibold">2022 Mercedes Benz</h1>
                <div className="flex flex-col mx-auto items-center relative">
                  <Image src={"/sellCar.png"} width={380} height={20} alt="Selling car" className="z-30" />
                  <Image src={"/layer3.png"} width={380} height={50} alt="Selling car" className="z-20 -translate-y-36"  />
                  <Image src={"/layer2.png"} width={380} height={50} alt="Selling car" className="z-10 -translate-y-60" />
                  <Image src={"/layer1.png"} width={380} height={50} alt="Selling car" className="z-0 -translate-y-80" />
                  </div>
                </div>
                <div className="w-[40%] flex flex-col gap-6 justify-center bg-white p-8 h-[50vh] rounded-lg">
                  <h1 className="font-semibold text-xl">Tracking History</h1>
                  <BarChart width={500} height={270} data={data} className="text-gray-100 self-start -translate-x-10">
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <YAxis />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#FF6370" />
                    <Bar dataKey="uv" fill="#FFF2F3" />
                  </BarChart>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
              <h1 className="font-semibold text-2xl">Offers</h1>
              <div className="flex flex-row items-center gap-3">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue className="capitalize text-xs">New</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="w-[140px]">
                    <SelectItem value="active">New</SelectItem>
                    <SelectItem value="banana">Old</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue className="capitalize text-xs">Toyota</SelectValue>
                  </SelectTrigger>
                  <SelectContent className="w-[140px]">
                    <SelectItem value="active">Toyota</SelectItem>
                    <SelectItem value="banana">Porsche</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full bg-white p-4 items-center  h-[35vh] rounded-lg flex flex-row">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="font-semibold text-2xl self-start">Killan James</h1>
                <div className="flex flex-row self-start gap-2">
                  <p className="text-[#FF6464]">$16,605</p>
                  <span className="text-xs text-[#A4A5A6] self-end">average price</span>
                </div>
                <p className="text-sm text-[#72767C] font-semibold">market average is $16,224</p>
                <button className="rounded-full py-1 px-4 self-start bg-[#FF6370]">
                  <ArrowRight size={18} color="#fff" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <PieChart width={210} height={160} className="self-center">
                  <Pie
                  data={impression}
                  cx={120}
                  cy={100}
                  startAngle={220}
                  endAngle={-50}
                  innerRadius={50}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {impression.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COlORS1[index % COlORS1.length]} />
                  ))}
                </Pie>
                </PieChart>
                <p className="font-semibold text-2xl -translate-y-20 translate-x-6">45%</p>
                <p className="text-sm font-semibold text-[#70CF97] -translate-y-14 translate-x-4">Excellent</p>
                <h1 className="font-medium -translate-y-14 translate-x-4">Impression Share</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <RadialBarChart
                  width={300} 
                  height={250} 
                  innerRadius="30%" 
                  outerRadius="60%"
                  data={data2} 
                  startAngle={0} 
                  endAngle={360}
                >
                  <RadialBar label={{ fill: '#666', position: 'insideStart' }} dataKey='uv' />    
                  <Tooltip /> 
                </RadialBarChart>
                <p className="font-semibold text-2xl -translate-y-36">$811</p>
              </div>
              <div className="flex flex-row items-center justify-around w-[50%]">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Image src={"/carOffer.png"} width={50} height={30} alt="Car offer 1" />
                  <h1 className="text-[#407EF9] font-2xl font-bold">$1,174</h1>
                  <p className="text-[#808191] font-semibold text-sm">Model Spend</p>
                </div> 
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Image src={"/carOffer1.png"} width={50} height={30} alt="Car offer 1" />
                  <h1 className="text-[#FF6370] font-2xl font-bold">$1,174</h1>
                  <p className="text-[#808191] font-semibold text-sm">Model Spend</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Image src={"/carOffer2.png"} width={50} height={30} alt="Car offer 1" />
                  <h1 className="text-[#A162F7] font-2xl font-bold">$811</h1>
                  <p className="text-[#808191] font-semibold text-sm">Spend per Unit Turned</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default SellCars