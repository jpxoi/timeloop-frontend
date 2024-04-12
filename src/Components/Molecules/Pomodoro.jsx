import {
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Pomodoro() {
  const [showPomodoro, setShowPomodoro] = React.useState(false);
  const togglePomodoro = () => {
    setShowPomodoro(!showPomodoro);
  };
  return (
    <div className="flex flex-col p-2 rounded-[0.5rem] text-gray-700 bg-white border relative">
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={togglePomodoro}
      >
        <div className="flex space-x-3 items-center justify-center font-[350] cursor-pointer ">
          {showPomodoro ? (
            <ChevronDownIcon className="w-4 h-4 cursor-pointer" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 cursor-pointer " />
          )}
        </div>
        <ClockIcon className=" w-5 h-5 cursor-pointer " />
        <div className="text-[1.1rem]">Pomodoro</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showPomodoro ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden `}
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <iframe
            src="https://pomofocus.io/"
            className="w-full h-[200px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
