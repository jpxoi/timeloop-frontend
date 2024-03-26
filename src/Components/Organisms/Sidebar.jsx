import React, { useState } from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import dayjs from "dayjs";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import cn from "classnames";
import DropdownMenu from "../Atoms/DropdownMenu";
import EventCard from "../Atoms/EventCard";
import WeatherCard from "../Atoms/Weather";

export default function Sidebar({ currentMonth, setCurrentMonth }) {
  const day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const [showCard, setShowCard] = useState(false);
  const [dateClick, setDateClick] = useState(null);

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

  const handleEventClick = (date) => {
    setShowCard(true);
    setDateClick(date);
  };

  const handleEventClose = () => {
    setShowCard(false);
  };

  return (
    <nav
      id="app-sidebar"
      className="flex w-[26%] h-screen overflow-y-auto border-r py-2"
    >
      <div className="flex flex-col justify-between w-full">
        <div className="px-4">
          <div className="flex bg-gray-50 p-3 rounded border my-4 space-x-4 items-center">
            <DisplayDayWeek params="" />
            <div className="text-gray-600 text-[12px] font-[400]">
              <div>Today</div>
              <div className="font-normal text-[13px] leading-5">
                No events scheduled
              </div>
            </div>
          </div>

          <div>
            <WeatherCard />
          </div>

          <div className="my-4 rounded-[0.5rem] px-2 pt-2 ">
            <div className="flex items-center justify-between text-gray-800 bg-gray-100 rounded-[0.5rem] px-4 py-2">
              <div>
                <DisplayMonthYear
                  params="font-[450] text-[13px]"
                  date={currentMonth}
                />
              </div>

              <div className="items-center">
                <LeftArrow
                  buttonparams=""
                  iconparams="w-4 h-4"
                  action={GetPreviousMonth}
                />

                <RightArrow
                  buttonparams=""
                  iconparams="w-4 h-4"
                  action={GetNextMonth}
                  className={`transition-all duration-[800ms] `}
                />
              </div>
            </div>

            <div className="grid grid-cols-7 mt-4 ">
              {day.map((day, index) => {
                let textColorClass = "text-blue-500";
                if (day === "SU" || day === "SA") {
                  textColorClass = "text-rose-500";
                }

                return (
                  <div key={index}>
                    <h1
                      className={`text-[0.5rem] font-[500] grid place-content-center ${textColorClass} mb-1`}
                    >
                      {day}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className="h-[150px] grid grid-cols-7 mt-1">
              {MiniCalendar({
                month: dayjs(currentMonth).month(),
                year: dayjs(currentMonth).year(),
              }).map(({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="text-[0.5rem] grid place-content-center"
                  >
                    <button
                      onClick={() => handleEventClick(date.date())}
                      className={cn(
                        currentMonth
                          ? "font-[400]"
                          : "text-gray-300 font-[500]",
                        today ? "bg-blue-500 text-white font-bold" : "",
                        "h-5 w-5 grid place-content-center rounded hover:border-blue-600 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
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

        <div className="border-t-2">
          <div className="py-2 px-4">
            <DropdownMenu />
          </div>
        </div>
      </div>

      {showCard && (
        <EventCard selectedDate={dateClick} onClose={handleEventClose} />
      )}
    </nav>
  );
}
