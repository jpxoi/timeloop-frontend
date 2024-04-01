import React from "react";
import dayjs from "dayjs";

function DisplayDayWeek({ date = dayjs(), params }) {
  const dayOfMonth = date.format("D");
  const weekday = date.format("ddd").toUpperCase();

  return (
    <div className={`${params} flex flex-col items-center justify-center  rounded-[0.5rem] shadow-md`}>
      <div className="bg-green-500  px-3 rounded-t-[0.5rem] shadow-md text-white">
        <div className="font-[600] text-[0.5rem] leading-4">{weekday}</div>
      </div>
      <div className="text-[1rem] leading-none py-1">{dayOfMonth}</div>
    </div>
  );
}

export default DisplayDayWeek;
