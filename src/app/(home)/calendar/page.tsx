"use client";
import * as React from 'react';
import { useState } from 'react';
import  Calendar  from 'react-calendar';
import SchedulerCalendar from 'scheduler-calendar';
import 'scheduler-calendar/dist/index.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3 overflow-x-hidden"> 
            <div className="w-full flex flex-row gap-4">
                <div className="w-[30%] flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Calendar</h1>
                    <div className="bg-white p-3">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="w-[70%] flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                        <select className="py-3 px-4 rounded-lg shadow-sm font-medium">
                            <option value="Toyota">Toyota</option>
                            <option value="Porsche">Porsche</option>
                        </select>
                        <select className="py-3 px-4 rounded-lg shadow-sm font-medium">
                            <option>Time</option>
                        </select>
                        <select className="py-3 px-4 rounded-lg shadow-sm font-medium">
                            <option >Status</option>
                            <option value="Active">Active</option>
                            <option value="Away">Away</option>
                        </select>
                    </div>
                    <SchedulerCalendar
                        availabilities={[
                            {
                            day: "mon",
                            slots: [
                                {from: '09:00', to: '10:30'},
                                {from: '11:30', to: '13:00'},
                                {from: '14:30', to: '17:00'},
                            ],
                            comment: "Test comment"
                            },
                            {
                            day: "2021-01-26",
                            slots: [
                                {from: '09:00', to: '10:30'},
                                {from: '11:30', to: '19:00'},
                            ]
                            },
                        ]}
                        availabilityType={'infinity'}
                        duration={10}
                        onIntervalChange={() => {}}
                        />
                        
                </div>
            </div>
            
        </div>
    )
}

export default CalendarPage