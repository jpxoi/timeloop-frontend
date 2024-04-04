import React from "react";
import Logo from "../Atoms/Logo";
import Button from "../Atoms/Button";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import SidebarIcon from "../Atoms/SidebarIcon";
import dayjs from "dayjs";

export default function NavBar({
  currentMonth,
  setCurrentMonth,
  onTodayButtonClick,
}) {
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
    <div className="flex px-4 pr-6 min-h-14 items-center border-b border-b-gray-200">
      <div className="flex w-full items-center justify-between space-x-3">
        
        <div className="flex space-x-3 items-center">
          <SidebarIcon />
          <Logo />

        </div>

        <div className="flex space-x-6 items-center">

          <DisplayMonthYear
            params="text-black font-[500] text-[1rem]"
            date={currentMonth}
          />

          <div className="flex justify-between items-center ">
            <LeftArrow
              buttonparams=""
              iconparams="w-4 h-4 mr-2 hover:bg-gray-100 rounded-full"
              action={GetPreviousMonth}
            />
            <RightArrow
              buttonparams=""
              iconparams="w-4 h-4 ml-2 hover:bg-gray-100 rounded-full"
              action={GetNextMonth}
            />
          </div>

          <Button
            params="hover:bg-white border-2 rounded py-1 px-3 mx-1 bg-gray-200 leading-4 text-gray-800 text-[0.8rem] rounded-[0.5rem]"
            text="Today"
            action={onTodayButtonClick}
          />
        </div>

      </div>

    </div>
  );
}

