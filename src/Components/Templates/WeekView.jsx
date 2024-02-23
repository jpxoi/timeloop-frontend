import React from "react";
import DayColumn from "../Molecules/DayColumn";

function WeekView() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center h-20 w-full border-b">
        <h1 className="text-4xl font-bold">Week View</h1>
      </div>
      <div className="grid-cols-7 h-full w-full overflow-y-scroll">
          <DayColumn/>
          <DayColumn/>
          <DayColumn/>
          <DayColumn/>
          <DayColumn/>
          <DayColumn/>
          <DayColumn/>

      </div>
    </div>
  );
}

export default WeekView;
