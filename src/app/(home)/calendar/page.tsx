"use client";
import * as React from 'react';
import { useEffect, useState } from 'react';
import  Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="w-full h-[90vh] overflow-y-auto bg-[#F5F4F6] flex flex-col gap-y-4 px-6 py-3 overflow-x-hidden"> 
            <div className="w-full flex flex-row gap-3">
                <div className="w-[35%] flex flex-col">
                    <h1 className="font-semibold text-2xl">Calendar</h1>
                    <div className="bg-white p-3">
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="w-[65%] flex flex-col">
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
                </div>
            </div>
            
        </div>
    )
}

export default CalendarPage