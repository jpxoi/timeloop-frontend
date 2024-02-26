import React from "react";
import DayColumn from "../Molecules/DayColumn";

const daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function WeekView() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center items-center h-20 w-full border-b border-gray-300">
        <h1 className="text-4xl font-bold">Week View</h1>
      </div>
      <div className="week-container grid grid-cols-[1fr_14fr] max-h-full overflow-y-scroll">
        <div className="week-hours">
          {Array.from({ length: 23 }).map((_, index) => {
            return (
              <div key={index} className="hour h-12 flex justify-end items-end px-4">
                <span className="text-xs font-semibold text-gray-500 translate-y-2">
                  {index < 9 ? `0${index + 1}:00` : `${index + 1}:00`}
                </span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 h-full w-full">
          {daysWeek.map((day, index) => {
            return <DayColumn key={index} day={day} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default WeekView;
