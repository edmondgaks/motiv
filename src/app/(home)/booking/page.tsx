"use client";
import { Lightning, RedHeart, RedoIcon, SettingsIcon, UserIcon } from "@/components/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Car {
    id: number;
    name: string;
    type: string;
    users: number;
    img: string;
    cost: number;
}


const Booking = () => {
    const cars: Car[] = [
        {
            id: 1,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking1.png",
            cost: 400,
        },
        {
            id: 2,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking2.png",
            cost: 400,
        },
        {
            id: 3,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking3.png",
            cost: 400,
        },
        {
            id: 4,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking4.png",
            cost: 400,
        },
        {
            id: 5,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking5.png",
            cost: 400,
        },
        {
            id: 6,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking6.png",
            cost: 400,
        },
        {
            id: 7,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking1.png",
            cost: 400,
        },
        {
            id: 8,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking2.png",
            cost: 400,
        },
        {
            id: 9,
            name: "Porshe 718 Cayman S",
            type: "Coupe",
            users: 4,
            img: "/booking3.png",
            cost: 400,
        }
    ];
    
    const [hearts, setHearts] = useState<boolean[]>(cars.map(() => false));

    const toggleHeart = (index: number) => {
        // Create a copy of the current hearts array
        const newHearts = [...hearts];
        // Toggle the heart state for the specific car at the given index
        newHearts[index] = !newHearts[index];
        // Update the state with the new array of heart states
        setHearts(newHearts);
    };
    return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3 overflow-x-hidden">
            <h1 className="font-semibold text-2xl">Booking</h1>
            <div className="w-full flex flex-row items-center justify-between">
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
                <div className="grid grid-cols-3 gap-4 w-full">
                    {cars.map((car, index) => (
                        <div key={car.id} className="flex flex-col shadow-md justify-center bg-white px-6 py-4 rounded-lg">
                            <div className="flex flex-row w-full justify-between items-center">
                                <h1 className="font-bold text-lg">{car.name}</h1>
                                {hearts[index] ? (
                                    <div className="bg-transparent" onClick={() => toggleHeart(index)}>
                                        <RedHeart />
                                    </div>
                                ) : (
                                    <Heart size={20} color="#A4A5A6" onClick={() => toggleHeart(index)} />
                                )}
                            </div>
                            <p className="">{car.type}</p>
                            <Image src={`${car.img}`} width={250} height={250} alt="booking 1" className="mx-auto" />
                            <div className="w-full flex flex-row items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <UserIcon />
                                    <p className="text-base font-light text-gray-600">{car.users}</p>
                                    <RedoIcon />
                                    <p className="text-base font-light text-gray-600">Manual</p>
                                </div>
                                <p className="text-lg font-medium text-gray-600">${car.cost}/h</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Booking