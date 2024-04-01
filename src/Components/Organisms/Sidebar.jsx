import React, { useState } from "react";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import DropdownMenu from "../Atoms/DropdownMenu";
import EventCard from "../Atoms/EventCard";
import WeatherCard from "../Atoms/Weather";
import CalendarComponent from "../Molecules/MiniCalendarDropdown";

export default function Sidebar({ currentMonth, setCurrentMonth }) {
  const [showCard, setShowCard] = useState(false);
  const [dateClick, setDateClick] = useState(null);



  const handleEventClose = () => {
    setShowCard(false);
  };

  return (
    <nav
      id="app-sidebar"
      className="flex w-[26%] h-screen overflow-y-auto border-r py-2 bg-slate-50"
    >
      <div className="flex flex-col justify-between w-full">
        <div className="px-4">
          <div className="flex bg-white p-3 rounded border mt-2 mb-4 space-x-4 items-center">
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

          <div className="my-2">
            <CalendarComponent
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
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
