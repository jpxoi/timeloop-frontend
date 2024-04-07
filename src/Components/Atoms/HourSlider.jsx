import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

function HourInput({ initialValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const toggleHourScroller = () => {
    setIsOpen(!isOpen);
  };

  const handleHourChange = (increment) => {
    let newHours = hours + increment;
    if (newHours < 0) {
      newHours = 23;
    } else if (newHours > 23) {
      newHours = 0;
    }
    setHours(newHours);
    updateValue();
  };

  const handleMinuteChange = (increment) => {
    let newMinutes = minutes + increment;
    if (newMinutes < 0) {
      newMinutes = 59;
      handleHourChange(-1); // Subtract 1 hour when reaching 0 minutes
    } else if (newMinutes > 59) {
      newMinutes = 0;
      handleHourChange(1); // Add 1 hour when reaching 59 minutes
    }
    setMinutes(newMinutes);
    updateValue();
  };

  const updateValue = () => {
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const newValue = `${formattedHours}:${formattedMinutes}`;
    if (onChange) {
      onChange(newValue);
    }
  };


  return (
    <div className="relative">
<input
  type="text"
  value={`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}
  onClick={toggleHourScroller}
  readOnly
  className="text-gray-900 text-sm rounded-lg p-2.5 items-center text-center" // Add text-center class here
  style={{ border: "none", outline: "none", width: "4rem" }}
/>

      {isOpen && (
        <div className="flex items-center flex-row absolute bg-white border border-gray-300 text-gray-700 shadow-lg rounded-md p-2 top-full z-10">
          <div className="flex flex-col items-center">
            <button className="mb-1" onClick={() => handleHourChange(-1)}><ChevronUpIcon className="w-3 h-3 fill-black" /></button>
            <div>{hours}</div>
            <button className="mt-1" onClick={() => handleHourChange(1)}><ChevronDownIcon className="w-3 h-3 fill-black" /></button>
          </div>
          <div className="flex flex-col items-center ml-2">
            <button className="mb-1" onClick={() => handleMinuteChange(-1)}><ChevronUpIcon className="w-3 h-3 fill-black" /></button>
            <div>{minutes}</div>
            <button className="mt-1" onClick={() => handleMinuteChange(1)}><ChevronDownIcon className="w-3 h-3 fill-black" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HourInput;
