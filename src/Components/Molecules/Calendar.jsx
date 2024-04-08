import React, { useState } from "react";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import dayjs from 'dayjs';
import cn from "classnames";

const Calendar = () => {
    const day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const [currentMonth, setCurrentMonth] = useState(
        dayjs().format("MMMM YYYY")
    );

    const GetNextMonth = () => {
    const newMonth = dayjs("MMMM YYYY")
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
        <div className="rounded-[0.5rem] pt-2 items-center w-[300px]">
          <div className="flex flex-col text-gray-800 rounded-[0.5rem]">
            <div className="flex justify-between items-center pl-2 py-2">
              <div>
                <DisplayMonthYear
                  params="font-[600] text-[1.2rem] pl-2"
                  date={currentMonth}
                />
              </div>

              <div className="items-center space-x-2 pr-2">
                <LeftArrow
                  buttonparams=""
                  iconparams="w-5 h-5"
                  action={GetPreviousMonth}
                />

                <RightArrow
                  buttonparams=""
                  iconparams="w-5 h-5"
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
                    className={`text-[0.8rem] font-[450] grid place-content-center ${textColorClass}`}
                  >
                    {day}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="h-[12rem] grid grid-cols-7 mt-1 mb-2">
            {MiniCalendar({
              month: dayjs(currentMonth).month(),
              year: dayjs(currentMonth).year(),
            }).map(({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="text-[0.7rem] font-[600] grid place-content-center"
                >
                  <button
                    className={cn(
                      currentMonth
                        ? "font-[500] text-[0.7rem] text-black"
                        : "text-gray-400 font-[500]",
                      today ? "bg-green-500 text-white font-bold" : "",
                      "h-5 w-5 grid place-content-center rounded hover:border-green-500 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                    )}
                  >
                    {date.date()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default Calendar