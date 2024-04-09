import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import HourInput from "../Atoms/HourSlider";
import Calendar from "./Calendar";
import {
  ClockIcon,
  TagIcon,
  MapPinIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function DayColumn({ day, events, addEvent }) {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const hourBlockStyle =
    "flex border-l border-b border-gray-200 min-h-32 hover:bg-gray-100  justify-center";
  const dayHours = Array.from({ length: 24 }).map((_, index) => {
    const hour = index % 12 === 0 ? 12 : index % 12;
    const period = index < 12 ? "am" : "pm";
    return `${hour} ${period}`;
  });

  const handleBlockClick = (hour) => {
    setSelectedHour(hour);
    setOpen(true);
    // Set start and end times to the clicked hour
    setStartTime(hour);
    setEndTime(hour);
  };

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleAllDayToggle = () => {
    setAllDay(!allDay);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleAddTask = () => {
    if (selectedHour && taskTitle.trim() && taskDescription.trim() !== "") {
      addEvent(selectedHour, {
        title: taskTitle,
        description: taskDescription,
        startTime,
        endTime,
      });
      setTaskTitle("");
      setTaskDescription("");
      setOpen(false); // Close the modal after adding event
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTaskTitle("");
    setTaskDescription("");
    setAllDay(false);
  };

  return (
    <div className="min-w-full flex">
      <div className="flex-grow">
        {dayHours.map((hour, index) => (
          <div
            key={index}
            className={hourBlockStyle}
            onClick={() => handleBlockClick(hour)}
          >
            {events && events[hour] && (
              <div className="flex flex-col p-3 pt-2 text-wrap bg-blue-100 h-auto w-[11.5rem] rounded-[0.5rem]">
                <h3 className="text-[1rem] font-[500]">{events[hour].title}</h3>
                <p className="text-[0.9rem] text-gray-800">
                  {`${events[hour].startTime} - ${events[hour].endTime}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" p-6 pt-5 bg-white rounded-[1.5rem] text-gray-100 min-w-[37%]">
            <div className="flex flex-col">
              <div className="flex text-black font-[450] text-[1rem] justify-between mb-3 ">
                <div>Create event</div>
                <button onClick={handleClose} className="flex">
                  <XMarkIcon className="w-6 h-6 fill-red-600 " />
                </button>
              </div>

              <div className="text-black">
                <input
                  type="text"
                  placeholder="Title"
                  value={taskTitle}
                  onChange={handleTitleChange}
                  className="text-[1.8rem] font-[550] pl-0 rounded-lg focus:ring-blue-500 focus:border-transparent block w-full"
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none", // Remove the default focus styling
                  }}
                />
              </div>

              <div className="relative text-black mt-4 flex w-full ">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 text-gray-600">
                  <TagIcon className="h-5 w-5 text-gray-600" />
                </span>
                <input
                  type="text"
                  placeholder="Add Label"
                  className="pl-10 w-full pr-4 py-2 rounded-[0.75rem] border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative text-black mt-4 flex w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 text-gray-600">
                  <MapPinIcon className="h-5 w-5 text-gray-600" />
                </span>
                <input
                  type="text"
                  placeholder="Add Location"
                  className="pl-10 w-full pr-4 py-2 rounded-[0.75rem] border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative text-black mt-4 flex w-full">
                <span className="absolute left-0 top-[1.3rem] transform -translate-y-1/2 pl-3 flex items-center space-x-2 text-gray-600">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-600" />
                </span>
                <textarea
                  placeholder="Add Description"
                  value={taskDescription}
                  onChange={handleDescriptionChange}
                  rows="4"
                  className="pl-10 pr-4 py-2 rounded-[0.75rem] border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex justify-center text-black items-center space-x-10 mt-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <div>Start time</div>
                  </div>
                  <HourInput className="" />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <div>End time</div>
                  </div>
                  <HourInput />
                </div>
              </div>

              <div className="flex items-center text-sm mt-2 text-black">
                <div
                  className={`relative inline-block w-9 h-5 mr-2 align-middle select-none transition duration-200 ease-in ${
                    allDay ? "bg-blue-600" : "bg-gray-200"
                  } rounded-full p-0.5 cursor-pointer`}
                  onClick={handleAllDayToggle}
                >
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${
                      allDay ? "translate-x-full" : "translate-x-0"
                    }`}
                  ></div>
                </div>
                <div className="text-sm">All Day</div>
              </div>

              <div className="flex justify-end mt-4 text-[1rem] font-[500]">
                <button
                  onClick={handleAddTask}
                  className="bg-blue-600 text-white px-6 py-3 rounded-[0.5rem]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayColumn;
