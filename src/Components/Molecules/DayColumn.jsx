import React from "react";

function DayColumn() {
  const hourBlockStyle = "border-b border-l border-gray-200 min-h-12";
  const dayHours = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  return (
    <div className="min-w-full">
      {dayHours.map((hour, index) => {
        return (
          <div key={index} className={hourBlockStyle}>
          </div>
        );
      })}
    </div>
  );
}

export default DayColumn;
