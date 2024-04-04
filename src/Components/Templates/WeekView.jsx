import React, { useState } from "react";
import DayColumn from "../Molecules/DayColumn";
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function WeekView() {
  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));

  const goToPreviousWeek = () => {
    setCurrentWeek(currentWeek.subtract(1, "week"));
  };

  const goToNextWeek = () => {
    setCurrentWeek(currentWeek.add(1, "week"));
  };

  const daysWeek = Array.from({ length: 7 }).map((_, index) => ({
    name: currentWeek.add(index, "day").format("ddd"),
    date: currentWeek.add(index, "day").format("D"),
  }));

  var currentTime = new Date();
  var currentTimezone = currentTime.getTimezoneOffset();
  currentTimezone = (currentTimezone / 60) * -1;
  var gmt = "GMT";
  if (currentTimezone !== 0) {
    gmt += currentTimezone > 0 ? " +" : " ";
    gmt += currentTimezone;
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Navigation */}
      <div className="flex justify-between px-4 py-2 border-b border-gray-200">
        <button onClick={goToPreviousWeek}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="text-center">
          {currentWeek.format("MMM DD")} -{" "}
          {currentWeek.endOf("week").format("MMM DD, YYYY")}
        </div>
        <button onClick={goToNextWeek}>
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Header */}
      <div className="week-header grid grid-cols-[1fr_14fr]">
        <div className="week-timezone flex justify-center items-center border-b border-gray-200">
          <p className="text-xs text-gray-500">
            {gmt}
          </p>
        </div>
        <div className="grid grid-cols-7 border-b border-gray-200">
          {daysWeek.map((day, index) => (
            <div
              key={index}
              className="text-center py-2 flex flex-col justify-center items-center"
            >
              <div className="text-sm font-semibold">{day.name}</div>
              <div className="text-xs text-gray-500">{day.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="week-container grid grid-cols-[1fr_14fr] max-h-full overflow-y-scroll">
        <div className="week-hours">
          {Array.from({ length: 23 }).map((_, index) => (
            <div
              key={index}
              className="hour h-12 flex justify-end items-end px-4"
            >
              <span className="text-xs text-gray-500 translate-y-2">
                {index < 9 ? `0${index + 1}:00 ` : `${index + 1}:00`}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-full w-full">
          {daysWeek.map((day, index) => (
            <div key={index} className="flex justify-center items-center">
              <DayColumn day={day.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekView;
