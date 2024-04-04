import React from "react";
import dayjs from "dayjs";

function WeekViewHeader({ currentWeek }) {
  const startOfWeek = dayjs(currentWeek).startOf("week");
  const days = [];
  const columnWidth = `${100 / 7}%`; // Calculate the width of each column

  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.add(i, 'day'));
  }

  return (
    <div className="bg-gray-100 py-2 px-4 text-center font-[500] text-lg">
      <div className="grid grid-cols-7" style={{ gap: 0 }}>
        {days.map((day, index) => (
          <div key={index} className="pl-[8.5rem] flex flex-col justify-center items-center" style={{ width: columnWidth }}>
            <div>{day.format("ddd")}</div>
            <div>{day.format("D")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekViewHeader;









