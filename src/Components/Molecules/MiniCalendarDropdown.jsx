import React, { useState } from "react";
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import cn from "classnames";
import dayjs from "dayjs";
import { WeatherIcon } from "react-icons-weather";

export default function CalendarComponent({ currentMonth, setCurrentMonth }) {
  const [showCalendar, setShowCalendar] = useState(true);
  const day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const GetNextMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY")
      .add(1, "month")
      .format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  const GetPreviousMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY")
      .subtract(1, "month")
      .format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  return (
    <div className="flex flex-col p-2 rounded-[0.5rem] text-gray-700 bg-white border relative">
      <div
        className="flex space-x-3 items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={toggleCalendar}
      >
        <CalendarDaysIcon className="w-5 h-5 text-gray-700 cursor-pointer font-thin" />
        <div>Calendar</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showCalendar ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="rounded-[0.5rem] pt-2 items-center">
          <div className="flex flex-col text-gray-800 rounded-[0.5rem]">
            <div className="flex justify-between items-center pl-2 py-2">
              <div>
                <DisplayMonthYear
                  params="font-[600] text-[1rem]"
                  date={currentMonth}
                />
              </div>

              <div className="items-center space-x-2 pr-2">
                <LeftArrow
                  buttonparams=""
                  iconparams="w-4 h-4 border rounded"
                  action={GetPreviousMonth}
                />

                <RightArrow
                  buttonparams=""
                  iconparams="w-4 h-4 border rounded"
                  action={GetNextMonth}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-1 rounded-[0.5rem] py-1 mb-2">
            {day.map((day, index) => {
              let textColorClass = "text-blue-500";
              if (day === "SU" || day === "SA") {
                textColorClass = "text-rose-500";
              }

              return (
                <div key={index}>
                  <h1
                    className={`text-[0.6rem] font-[500] grid place-content-center ${textColorClass}`}
                  >
                    {day}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="h-[155px] grid grid-cols-7 mt-1">
            {MiniCalendar({
              month: dayjs(currentMonth).month(),
              year: dayjs(currentMonth).year(),
            }).map(({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="text-[0.5rem] font-[600] grid place-content-center"
                >
                  <button
                    className={cn(
                      currentMonth
                        ? "font-[500] text-[0.6rem]"
                        : "text-gray-400 font-[500]",
                      today ? "bg-blue-600 text-white font-bold" : "",
                      "h-5 w-5 grid place-content-center rounded hover:border-blue-500 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                    )}
                  >
                    {date.date()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
