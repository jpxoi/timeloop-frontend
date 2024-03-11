import React, {useState} from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import dayjs from "dayjs";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import cn from "classnames";
import DropdownMenu from "../Atoms/DropdownMenu";
import EventCard from "../Atoms/EventCard";


export default function Sidebar({ currentMonth, setCurrentMonth }) {
  const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
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
    <nav id="app-sidebar" className="flex flex-col w-[28%] h-screen overflow-y-auto border-r px-4 py-2 bg-slate-100">

      <div className="">
        <DropdownMenu/>
      </div>

      <div className="bg-white rounded-[0.5rem] px-3 py-2 mt-2 shadow-sm">
          <div className="text-[14px] font-[450] my-2">
            Dashboard
          </div>
          <div class="flex justify-between bg-">
            <div class="rounded-[0.7rem] bg-sky-500 h-20 w-[85px]"></div>
            <div class="rounded-[0.7rem] bg-yellow-400 h-20 w-[85px]"></div>
            <div class="rounded-[0.7rem] bg-fuchsia-500 h-20 w-[85px]"></div>
          </div>

      </div>

      <div className="mt-2 bg-white rounded-[0.5rem] p-4 shadow-sm">
        <div className="flex items-center justify-between text-black">
            <div className="">
              <LeftArrow
                buttonparams=""
                iconparams="w-4 h-4"
                action={GetPreviousMonth}
              />
            </div>

            <div>
              <DisplayMonthYear
                params="font-[450] text-[14px] text-blue-900"
                date={currentMonth}
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
                <button
                  onClick={() => handleEventClick(date.date())} 
                  className={cn(
                    currentMonth ? "font-[400]" : "text-gray-400 font-[500]",
                    today ? "bg-green-500 text-white" : "",
                    "h-5 w-5 grid place-content-center rounded hover:border-purple-500 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                  )}
                >
                  {date.date()}
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {showCard && <EventCard selectedDate={dateClick} onClose={handleEventClose} />}

    </nav>
  );
}
