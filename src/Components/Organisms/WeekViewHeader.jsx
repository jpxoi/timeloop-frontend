import React from "react";

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_NUMBERS = [3, 4, 5, 6, 7, 8, 9];

function WeekViewHeader() {
  const customStyle = {
    paddingLeft: "65.96px",
    display: "flex",
    borderBottom: "1px solid #d1d5db",
  };

  const dayStyle = {
    width: "calc(100% / 7)",
    textAlign: "center",
    padding: "1rem",
  };

  return (
    <div className="week-view-header" style={customStyle}>
      {DAYS_OF_WEEK.map((day, index) => (
        <div key={index} style={dayStyle}>
          <div className="text-sm text-gray-500 font-normal">{day.substring(0, 3)}</div>
          <div className="text-lg font-normal">{DAY_NUMBERS[index]}</div>
        </div>
      ))}
    </div>
  );
}

export default WeekViewHeader;

