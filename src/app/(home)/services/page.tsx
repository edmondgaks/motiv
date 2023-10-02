import React from "react";
import Image from "next/image";

type ServiceItemProps = {
    label: string;
  };
  

const ServiceItem: React.FC<ServiceItemProps> = ({ label }) => (
    <div className="py-5 px-4 shadow-sm rounded-md bg-white font-medium text-black text-lg">
      {label}
    </div>
  );

  type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
    const serviceLabels = [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
      ];
      const serviceLabels1 = [
        "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
      ];
    return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-row px-6 py-3 overflow-x-hidden">
            <div className="w-[60%] flex flex-col gap-4">
                <h1 className="font-semibold text-xl">Service Station</h1>
                <div className="flex flex-row gap-3 w-full">
                {serviceLabels.map((label) => (
                    <ServiceItem key={label} label={label} />
                ))}
                </div>
                <div className="flex flex-row gap-3 w-full">
                {serviceLabels1.map((label) => (
                    <ServiceItem key={label} label={label} />
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
            </div>
        </div>
    )
}

export default Services;