import React from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import dayjs from "dayjs";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import cn from "classnames";
import { PlusIcon } from "@heroicons/react/24/solid";
import EventCard from "../Atoms/EventCard";
import Avatar from "../Atoms/Avatar";

export default function Sidebar({ currentMonth, setCurrentMonth }) {
  const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

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
    <nav
      id="app-sidebar"
      className="h-full flex flex-col w-[23%] border-r px-4 py-2 relative bg-gray-100 "
    >
      <div className="flex px-4 py-4  space-x-5 rounded-[0.5rem] bg-white my-2">
        <Avatar/>
        <span class="bottom-0 left-0 absolute w-[0.65rem] h-[0.65rem] bg-amber-400 border-2 border-white dark:border-gray-800 rounded-full"></span>

        <div className="font-[500]">
          Micheal Cooper
        </div>
      </div>

      <div className="flex justify-between space-x-6 my-1 bg-white rounded-[0.5rem] shadow-sm items-start p-3 ">
        <div className="">
          <DisplayDayWeek params="rounded-[0.5rem] p-2 text-black" />
        </div>
      </div>

      <div className="mt-3 bg-white rounded-[0.5rem] p-4 shadow-sm">
        <div className="flex items-center justify-between text-black">
          <div className="flex justify-between">
            <div className="">
              <LeftArrow
                buttonparams=""
                iconparams="w-4 h-4"
                action={GetPreviousMonth}
              />
            </div>

            <div>
              <RightArrow
                buttonparams=""
                iconparams="w-4 h-4"
                action={GetNextMonth}
              />
            </div>
          </div>

          <div>
            <DisplayMonthYear
              params="font-[450] text-[16px] text-blue-900"
              date={currentMonth}
            />
          </div>

        </div>

        <div className="grid grid-cols-7 mt-4 ">
          {day.map((day, index) => {
            let textColorClass = "text-blue-500"; // Default text color class
            if (day === "Su" || day === "Sa") {
              textColorClass = "text-rose-500"; // Change text color class for "Su" and "Sa"
            }

            return (
              <div key={index}>
                <h1
                  className={`text-[12px] font-[500] grid place-content-center ${textColorClass} mb-1`}
                >
                  {day}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="h-40 grid grid-cols-7 mt-1">
          {MiniCalendar({
            month: dayjs(currentMonth).month(),
            year: dayjs(currentMonth).year(),
          }).map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="text-[10px] grid place-content-center">
                <h1
                  className={cn(
                    currentMonth ? "font-[400]" : "text-gray-400 font-[500]",
                    today ? "bg-green-500 text-white" : "",
                    "h-5 w-5 grid place-content-center rounded hover:border-purple-500 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

    </nav>
  );
}
