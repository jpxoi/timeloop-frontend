import React, { useState } from "react";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import DropdownMenu from "../Atoms/DropdownMenu";
import EventCard from "../Atoms/EventCard";
import WeatherCard from "../Atoms/Weather";
import CalendarComponent from "../Molecules/MiniCalendarDropdown";
import Pomodoro from "../Molecules/Pomodoro";

export default function Sidebar({
  currentMonth,
  setCurrentMonth,
  onTodayButtonClick,
}) {
  const [showCard, setShowCard] = useState(false);
  const [dateClick, setDateClick] = useState(null);

  const handleEventClose = () => {
    setShowCard(false);
  };

  return (
    <nav
      id="app-sidebar"
      className="flex w-[26%] h-screen overflow-y-auto border-r py-2 min-w-[300px] max-w-[400px]"
    >
      <div className="flex flex-col justify-between w-full">
        <div className="px-3 max-h-screen">
          <div className="flex rounded  mt-2 mb-4 space-x-4 items-center">
            <DisplayDayWeek params="" />
            <div className="w-full rounded-[0.5rem] px-2 py-1 bg-white border text-gray-600 text-base font-[400]">
              <div className="font-[500]">Today</div>
              <div className="font-normal text-sm leading-5">
                No events scheduled
              </div>
            </div>
          </div>

          <div>
            <WeatherCard />
          </div>

          <div className="mt-4">
            <CalendarComponent
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              todayButton={onTodayButtonClick}
            />
          </div>

          <div className="mt-4">
            <Pomodoro />
          </div>
        </div>

        <div className="">
          <div className="px-3 py-1">
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
