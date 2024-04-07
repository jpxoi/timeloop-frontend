import React, { useState } from "react";
import { XMarkIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
import HourInput from "../Atoms/HourSlider";

function DayColumn({ day, events, addEvent }) {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const hourBlockStyle =
    "border-b border-l border-gray-200 min-h-12 hover:bg-gray-100";
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
    <div className="min-w-full">
      {dayHours.map((hour, index) => (
        <div
          key={index}
          className={hourBlockStyle}
          onClick={() => handleBlockClick(hour)}
        >
          {events && events[hour] && (
            <div className="px-2 py-1 flex flex-col text-wrap border-t-4 border-t-blue-600 bg-blue-50 max-h-[42px] mb-1 mr-2 rounded-md">
              <h3 className="text-[0.75rem] leading-none">
                <strong>{events[hour].title}</strong>
              </h3>
              <p className="text-[0.65rem]">
                {`${events[hour].startTime} - ${events[hour].endTime}`}
              </p>
            </div>
          )}
        </div>
      ))}

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col p-6 bg-white rounded-md text-gray-100 w-[30%] min-w-[400px] justify-evenly">
            <div className="flex text-black font-[450] text-[0.9rem] justify-between mb-4">
              <div>Create event</div>
              <button
                onClick={handleClose}
                className="bg-gray-100 rounded px-1"
              >
                <XMarkIcon className="w-3 h-3 fill-gray-900 " />
              </button>
            </div>

            <div className="flex text-[11px]">
              <input
                type="text"
                placeholder="Title..."
                value={taskTitle}
                onChange={handleTitleChange}
                className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                style={{ border: "none", outline: "none" }}
              />
            </div>

            <div className="flex text-[11px]">
              <textarea
                placeholder="Description..."
                value={taskDescription}
                onChange={handleDescriptionChange}
                rows="5"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
              />
            </div>

            <div className="flex space-x-10 mt-4">
            <div>
              <HourInput/>
            </div>

            <div>
              <HourInput/>
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

            <div className="flex justify-center mt-4 text-[0.85rem]">
              <button
                onClick={handleAddTask}
                className="bg-blue-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-700"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayColumn;



