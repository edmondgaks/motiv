"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, LineChart, MessageCircle, Wrench } from "lucide-react";
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
      
const reminders = [
  {
     id: 1,
     description: 'Urgent Safety Recall',
     due: '06/04/2022',
     overdue: '08/04/2022',
     notify: 'David Demo',
     status: 'Completed'
  },
  {
    id: 2,
    description: 'Urgent Safety Recall',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'David Demo',
    status: 'Completed'
 },
 {
  id: 3,
  description: 'Urgent Safety Recall',
  due: '06/04/2022',
  overdue: '08/04/2022',
  notify: 'David Demo',
  status: 'Completed'
},
];
    return (
        <div className="w-full h-[90vh]  bg-[#F5F4F6] overflow-y-auto flex flex-col gap-y-4 px-8 py-3">
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
                  <Image src={"/assetCar.png"} width={300} height={300} alt="AssetCar" className="" />
                </div>
                <div className="w-[70%] h-[60vh] flex flex-col gap-4">
                  <div className="w-full bg-white rounded-lg gap-4 py-6 px-8">
                    <div className="flex flex-row w-full justify-between">
                      <h1 className="font-semibold text-lg">Activity</h1>
                      <p className="text-base text-gray-400 font-medium">View All</p>
                    </div>
                    <AreaChart width={800} height={300} data={data}
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
                <div className="w-full flex flex-row items-center gap-4">
                  <div className="flex flex-col bg-white w-[50%] gap-3 py-4 px-6 rounded-lg justify-center">
                    <h1 className="text-xl font-semibold">Noties</h1>
                    <div className="flex  flex-row gap-3 items-center">
                      <div className="bg-white shadow-lg p-2 rounded-full">
                        <MessageCircle size={24} />
                      </div>
                      <div className="flex flex-col gap-1 justify-center">
                        <h1 className="font-semibold text-sm">Monday, 6th April 2020</h1>
                        <p className="font-medium text-[#72767C] text-xs">Book for General Service</p>
                        <span className="w-[75%] rounded-md bg-[#70CF97] text-white text-center">COMPLETED</span>
                      </div>
                    </div>
                    <div className="flex  flex-row gap-3 items-center">
                      <div className="bg-white shadow-lg p-2 rounded-full">
                        <AlertCircle color="red" size={24} />
                      </div>
                      <div className="flex flex-col gap-1 justify-center">
                        <h1 className="font-semibold text-sm">Thursday, 24th October 2021</h1>
                        <p className="font-medium text-[#72767C] text-xs">Vehicle LV 001 has been marked for recall.</p>
                        <span className="w-[75%] rounded-md bg-[#ECEEF0] text-black text-center">14:07-21/11/2021</span>
                      </div>
                    </div>
                    <div className="flex  flex-row gap-3 items-center">
                      <div className="bg-white shadow-lg p-2 rounded-full">
                        <Wrench  size={24} />
                      </div>
                      <div className="flex flex-col gap-1 justify-center">
                        <h1 className="font-semibold text-sm">Monday, 13th August 2018</h1>
                        <p className="font-medium text-[#72767C] text-xs">Maintenance Completed, Collect.</p>
                        <span className="w-full rounded-md bg-[#ECEEF0] text-black text-center">14:07-21/11/2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white w-[50%] gap-3 py-4 px-6 rounded-lg justify-center">
                    <div className="w-full flex flex-row justify-between">
                      <h1 className="font-semibold text-xl">Available Sensors</h1>
                      <p className="text-[#72767C] text-sm">Assets</p>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-3">
                        <input type="checkbox" size={32} />
                        <h1 className="font-semibold text-[#242731]">Asset - Fuel Consumed (10)</h1>
                      </div>
                      <LineChart size={24} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-3">
                        <input type="checkbox" size={32} />
                        <h1 className="font-semibold text-[#242731]">Asset - Odometer (10)</h1>
                      </div>
                      <LineChart size={24} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-3">
                        <input type="checkbox" size={32} />
                        <h1 className="font-semibold text-[#242731]">Asset - Runtime (km)</h1>
                      </div>
                      <LineChart size={24} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-3">
                        <input type="checkbox" size={32} />
                        <h1 className="font-semibold text-[#242731]">Asset - Speed (hr)</h1>
                      </div>
                      <LineChart size={24} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center gap-3">
                        <input type="checkbox" size={32} />
                        <h1 className="font-semibold text-[#242731]">Asset - Temperature (deg C)</h1>
                      </div>
                      <LineChart size={24} />
                    </div>
                    <button className="p-2 bg-[#FF6370] text-white rounded-md w-[20%]">See All</button>
                  </div>
                </div>
                <div className="w-full bg-white p-4 mb-4 flex flex-col gap-2 rounded-lg">
                  <div className="w-full flex flex-row items-center justify-between">
                    <h1 className="font-semibold text-xl">Reminder</h1>
                    <button className="p-2 text-white rounded-md bg-[#A162F7] font-semibold">+ Add New</button>
                  </div>
                  <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Due</TableHead>
                            <TableHead>Overdue</TableHead>
                            <TableHead>Notify</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {reminders.map((reminder) => (
                    <TableRow key={reminder.id} className="font-semibold">
                        <TableCell>{reminder.description}</TableCell>
                        <TableCell>{reminder.due}</TableCell>
                        <TableCell>{reminder.overdue}</TableCell>
                        <TableCell>{reminder.notify}</TableCell>
                        <TableCell>{reminder.status}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Assets