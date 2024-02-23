import React, { useState } from "react";
import Logo from "../Atoms/Logo";
import NavbarProfile from "../Atoms/NavbarProfile";
import Button from "../Atoms/Button";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import dayjs from "dayjs";

export default function NavBar({ currentMonth, setCurrentMonth, onTodayButtonClick }) {

  const GetNextMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY").add(1, "month").format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  const GetPreviousMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY").subtract(1, "month").format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  return (
    <div className="px-4 flex items-center justify-between border-b">
      <div className="flex items-center">
        <Logo />
        <h1 className="mr-10 text-lg text-blue-400">Calendar</h1>
        <Button
          params="hover:bg-gray-100 border rounded py-2 px-3 mx-1 text-xs border-gray-300"
          text="Today"
          action={onTodayButtonClick}
        />
        <div className="flex justify-between mx-7">
          <LeftArrow buttonparams="" iconparams="w-3 h-3 mr-3 hover:bg-gray-100 rounded-full" action={GetPreviousMonth} />
          <RightArrow buttonparams="" iconparams="w-3 h-3 ml-3 hover:bg-gray-100 rounded-full" action={GetNextMonth} />
        </div>
        <DisplayMonthYear params="text-black font-[400] text-[17px]" date={currentMonth} />
      </div>
      <div className="flex items-center">
        <NavbarProfile />
      </div>
    </div>
  );
}

