import React from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import dayjs from "dayjs";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";

export default function Sidebar({ currentMonth, setCurrentMonth }) {

  const day=["S","M","T","W","T","F","S"];

  const GetNextMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY").add(1, "month").format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };
  
  const GetPreviousMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY").subtract(1, "month").format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };
  
  return (
    <nav id="app-sidebar" className="h-auto flex flex-col w-1/5 border-r pt-6 px-5 py-10 relative">
      <div className="flex  items-center justify-between mb-4 space-x-6">
        <div>
          <DisplayDayWeek params="bg-blue-600 rounded p-2" />
        </div>
        <div className=" ">
          <h1 className="text-[13px]"> <b>Today</b> <br/> No events or meetings scheduled</h1>
        </div>
      </div>


      <div className="border-2 rounded p-2 mt-4">

        <div className="flex items-center justify-between">
          <div>
            <DisplayMonthYear params="text-black font-[450] text-[11px]" date={currentMonth}/>
          </div>
          <div>
            <LeftArrow buttonparams="" iconparams="w-3 h-3 mr-1 hover:bg-gray-100 rounded-full" action={GetPreviousMonth} />
            <RightArrow buttonparams="" iconparams="w-3 h-3 ml-1 hover:bg-gray-100 rounded-full" action={GetNextMonth} />
          </div>
        </div>

        <div className="grid grid-cols-7 mt-4">
          {day.map((day, index) => {
            return (
              <div key={index}>
                <h1 className="text-[11px] font-[500] grid place-content-center text-blue-700 border-b">{day}</h1>
              </div>
            );
          })}

        </div>

        <div className="h-40 grid grid-cols-7 mt-4">

          {MiniCalendar({ month: dayjs(currentMonth).month(), year: dayjs(currentMonth).year() }).map(({ date }, index) => {
            return (
              <div key={index}>
                <h1 className="text-[9px] m-1 grid place-content-center">{date.date()}</h1>
              </div>
            );
          })}
        </div>
      </div>

    </nav>
  );
}



