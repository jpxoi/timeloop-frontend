import {
  GlobeAmericasIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Timezones() {
  const [showTimezones, setShowTimezones] = React.useState(false);
  const togglePomodoro = () => {
    setShowTimezones(!showTimezones);
  };
  return (
    <div className="flex flex-col p-2 rounded-[0.5rem] text-gray-700 bg-white border relative">
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={togglePomodoro}
      >
        <div className="flex space-x-3 items-center justify-center font-[350] cursor-pointer ">
          {showTimezones ? (
            <ChevronDownIcon className="w-4 h-4 cursor-pointer" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 cursor-pointer " />
          )}
        </div>
        <GlobeAmericasIcon className=" w-5 h-5 cursor-pointer " />
        <div className="text-[1.1rem]">Sync2City</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showTimezones ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden `}
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <iframe
            src="https://widgets.commoninja.com/iframe/9d18f3c0-2903-48db-a127-6f921e3e7419"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          ¨
        </div>
      </div>
    </div>
  );
}
