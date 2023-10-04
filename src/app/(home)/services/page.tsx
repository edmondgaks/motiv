"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Cell, Pie, PieChart } from "recharts";
import ProgressBar from 'progressbar.js';



type ServiceItemProps = {
    label: string;
    isSelected: boolean;
    onClick: () => void;
};
  
type ProgressBar = {

};

const initializeProgressBars = () => {
  const colors = ['#A162F7', '#70CF97', '#FFA500', '#FF6370']; // Define your colors here
  const progressBarContainers = document.querySelectorAll('.progress-bar-container');

  progressBarContainers.forEach((container, index) => {
    const bar = new ProgressBar.Line(container, {
      strokeWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      color: colors[index],
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: { width: '60%', height: '70%' },
      text: {
        style: {
          color: '#999',
          position: 'absolute',
          right: '0',
          top: '30px',
          padding: 0,
          margin: 0,
          transform: null,
        },
        autoStyleContainer: false,
      },
      from: { color: colors[index] },
      to: { color: '#ED6A5A' },
      step: (state, bar) => {
        bar.value();
      },    
    });

    bar.animate(0.7); // Adjust the progress value as needed
  });
};

const ServiceItem: React.FC<ServiceItemProps> = ({ label, isSelected, onClick }) => (
    <div onClick={onClick}  className={`py-5 px-4 shadow-sm rounded-md font-medium cursor-pointer text-lg ${isSelected ? "bg-[#FF6370] text-white" : "bg-white text-black"}`}>
      {label}
    </div>
  );

  type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
    useEffect(() => {
    initializeProgressBars();
    }, []);
    const serviceLabels = [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
      ];
      const serviceLabels1 = [
        "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
      ];
      const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 400 },
      ];
      const COLORS = ['#70CF97', '#A162F7', '#FF6370'];

      const [selectedServices, setSelectedServices] = useState<string[]>([]);
      const handleServiceClick = (label: string) => {
        if (selectedServices.includes(label)) {
          // If the service is already selected, remove it
          setSelectedServices(selectedServices.filter((item) => item !== label));
        } else {
          // If the service is not selected, add it
          setSelectedServices([...selectedServices, label]);
        }
      };
      return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] gap-6 flex flex-col px-6 py-3 overflow-x-hidden">
            <div className="flex flex-row gap-6">
                <div className="w-[60%] flex flex-col gap-4">
                    <h1 className="font-semibold text-black text-xl">Service Station</h1>
                    <div className="flex flex-row gap-4 w-full">
                    {serviceLabels.map((label) => (
                        <ServiceItem key={label} label={label} isSelected={selectedServices.includes(label)}
              onClick={() => handleServiceClick(label)}  />
                    ))}
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                    {serviceLabels1.map((label) => (
                        <ServiceItem key={label} label={label} isSelected={selectedServices.includes(label)}
                        onClick={() => handleServiceClick(label)}  />
                    ))}
                    </div>
                    <div className="w-full flex flex-row justify-center items-center gap-3 text-[#72767C]">
                        <div className="flex flex-row items-center gap-2">
                            <div className="rounded-full p-1 bg-white border border-[#72767C]"></div>
                            <p className="text-sm font-medium">Ready</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <div className="rounded-full p-1 bg-[#FF6370] border border-[#72767C]"></div>
                            <p className="text-sm font-medium">Booked</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <div className="rounded-full p-1 bg-[#A162F7] border border-[#72767C]"></div>
                            <p className="text-sm font-medium">Current Station</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-[40%] bg-white rounded-lg flex relative flex-col items-center p-4">
                            <h1 className="font-semibold text-xl">Your Order</h1>
                            <PieChart width={220} height={250}>
                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={1}
                                dataKey="value"
                                >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                            </PieChart>
                            <div className="p-8 rounded-full bg-[#F6F6F6] absolute translate-y-24">
                                <h1 className="text-gray-500 font-semibold text-base">Service</h1>
                                <p className="text-2xl text-[#A162F7] font-semibold">5, 2<span className="text-sm">h</span></p>
                            </div>
                        </div>
                        <div className="w-[60%] flex flex-col gap-4">
                            <div className="flex flex-row items-center justify-between p-4 bg-white rounded-lg">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="rounded-full p-2 bg-[#70CF97] border border-[#70CF97]"></div>
                                    <p className="text-lg font-semibold text-gray-600">Brake fluid change</p>
                                </div>
                                <div className="py-1 px-4 rounded-md bg-[#F6EFFE] text-[#A162F7] text-lg font-semibold">$32</div>
                            </div>
                            <div className="flex flex-row items-center justify-between p-4 bg-white rounded-lg">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="rounded-full p-2 bg-[#FF6370] border border-[#FF6370]"></div>
                                    <p className="text-lg font-semibold text-gray-600">Diagnotics</p>
                                </div>
                                <div className="py-1 px-4 rounded-md bg-[#F6EFFE] text-[#A162F7] text-lg font-semibold">$32</div>
                            </div>
                            <div className="flex flex-row items-center justify-between p-4 bg-white rounded-lg">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="rounded-full p-2 bg-[#A162F7] border border-[#A162F7]"></div>
                                    <p className="text-lg font-semibold text-gray-600">External Washing</p>
                                </div>
                                <div className="py-1 px-4 rounded-md bg-[#F6EFFE] text-[#A162F7] text-lg font-semibold">$10</div>
                            </div>
                            <button className="w-full p-3 bg-[#EFEBF1] text-gray-600 font-semibold text-lg rounded-lg border-[#A162F7] border text-center border-dashed">Add Services</button>
                        </div>
                    </div>
                    <button className="w-full bg-[#A162F7] text-xl p-3 text-center text-white font-semibold rounded-lg">Pay $86</button>
                </div>
                <div className="w-[40%] flex flex-col gap-4  text-[#5F6165]">
                    <h1 className="font-semibold text-xl">Service Required</h1>
                    <div className="w-full bg-white flex flex-col gap-2  w-[90%] rounded-lg p-4">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="p-3 bg-[#F1FAF5] rounded-full">
                            <Image src={"/center.png"} alt="Center icon" width={30} height={30} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-xl">Center Care</h1>
                            <div className="flex flex-row items-center gap-4 justify-center">
                                <p className="font-semibold text-black text-base">Price: $48</p>
                                <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                                    <p className="text-base">Processing: 1 hour</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[3px] ml-7 h-8 bg-[#70CF97]"></div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="p-3 bg-[#F1FAF5] rounded-full">
                                <Image src={"/diagnotic.png"} alt="Center icon" width={30} height={30} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-xl">Diagnotics</h1>
                                <div className="flex flex-row items-center gap-4 justify-center">
                                    <p className="font-semibold text-black text-base">Price: $78</p>
                                    <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                                    <p className="text-base">Processing: 2 hour</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[3px] ml-7 h-8 bg-[#A162F7]"></div>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="p-3 bg-[#F1FAF5] rounded-full">
                                <Image src={"/cleaning.png"} alt="Center icon" width={30} height={30} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-xl">Inner Cleaning</h1>
                                <div className="flex flex-row items-center gap-4 justify-center">
                                    <p className="font-semibold text-black text-base">Price: $78</p>
                                    <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                                    <p className="text-base">Processing: 3 hour</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <h1 className="font-semibold text-black text-xl">Service Schedule</h1>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-2 items-center">
                            <input type="radio" />
                            <h1 className="text-base font-medium text-black">Upgrade your favorite car <br /> periodically</h1>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-evenly w-[50%]">
                            <p className="text-sm text-gray-600">Today, 10.00</p>
                            <p className="text-sm text-gray-600">Fix Price: $1,200</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-2 items-center">
                            <input type="radio" />
                            <h1 className="text-base font-medium text-black">Buy spare parts for <br /> suspension</h1>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-evenly w-[50%]">
                            <p className="text-sm text-gray-600">Today, 14.00</p>
                            <p className="text-sm text-gray-600">Fix Price: $1,400</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-8 rounded-lg  bg-white flex flex-row justify-between">
                <div className="flex flex-col gap-3 justify-center">
                    <Image src={"/service1.png"} alt="service" width={80} height={80} />
                    <p className="text-lg font-semibold text-black">Oil Level</p>
                    <div className="flex flex-row gap-3">
                        <p className="text-base text-gray-600">Engine</p>
                        <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                        <p className="text-base text-gray-600">Don't Replace</p>
                    </div>
                    {/* Progress bar component */}
                     <div className="progress-bar-container"></div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <Image src={"/service2.png"} alt="service" width={80} height={80} />
                    <p className="text-lg font-semibold text-black">Brake Pads</p>
                    <div className="flex flex-row gap-3">
                        <p className="text-base text-gray-600">Wheels</p>
                        <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                        <p className="text-base text-gray-600">Still Good</p>
                    </div>
                    {/* Progress bar component */}
                     <div className="progress-bar-container"></div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <Image src={"/service3.png"} alt="service" width={80} height={80} />
                    <p className="text-lg font-semibold text-black">Steering</p>
                    <div className="flex flex-row gap-3">
                        <p className="text-base text-gray-600">Drivetrain</p>
                        <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                        <p className="text-base text-gray-600">Need Change</p>
                    </div>
                    {/* Progress bar component */}
                     <div className="progress-bar-container"></div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                    <Image src={"/service1.png"} alt="service" width={80} height={80} />
                    <p className="text-lg font-semibold text-black">Oil Level</p>
                    <div className="flex flex-row gap-3">
                        <p className="text-base text-gray-600">Engine</p>
                        <div className="bg-[#ECECEC] h-4 p-[0.8px]"></div>
                        <p className="text-base text-gray-600">Don't Replace</p>
                    </div>
                    {/* Progress bar component */}
                     <div className="progress-bar-container"></div>
                </div>
            </div>
        </div>
    )
}

export default Services;