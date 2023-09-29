"use client";
import React from "react";
import Image from "next/image";
import { Layer1 } from "@/components/icons";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const data2 = [
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
                  <BarChart width={500} height={270} data={data2} className="text-gray-100 self-start -translate-x-10">
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
            <div className="w-full bg-white"></div>
        </div>
    )
}

export default SellCars