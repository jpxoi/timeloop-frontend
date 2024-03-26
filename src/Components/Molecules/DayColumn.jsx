import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function DayColumn() {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [tasks, setTasks] = useState({});
  const hourBlockStyle = "border-b border-l border-gray-200 min-h-12 hover:bg-gray-100";
  const dayHours = [
    "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM",
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM", "11:00 PM",
  ];

  const handleBlockClick = (hour) => {
    setSelectedHour(hour);
    setOpen(true);
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

  const handleAddTask = () => {
    if (selectedHour && taskTitle.trim() && taskDescription.trim() !== "") {
      setTasks({ ...tasks, [selectedHour]: { title: taskTitle, description: taskDescription, allDay: allDay } });
      setTaskTitle("");
      setTaskDescription("");
      setAllDay(false);
      setOpen(false);
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
      {dayHours.map((hour, index) => {
        return (
          <div
            key={index}
            className={hourBlockStyle}
            onClick={() => handleBlockClick(hour)}
          >
            {tasks[hour] && (
              <div className="px-3 py-2 flex flex-col text-wrap border-t-4 border-t-blue-600 bg-blue-50 m-1">
                <div className="text-[0.85rem]">{tasks[hour].title}</div>
                <div className="text-[0.7rem]">{tasks[hour].description}</div>
              </div>
            )}
          </div>
        );
      })}

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col p-6 bg-white rounded-md text-gray-100 w-[30%] justify-evenly">
            <div className="flex text-black font-[600] text-[14px] justify-between mb-4">
              <div>Create New Task</div>
              <button onClick={handleClose}>
                <XMarkIcon className="w-5 h-5 fill-gray-400" />
              </button>
            </div>

            <div className="flex text-[11px]">
              <input
                type="text"
                placeholder="Title..."
                value={taskTitle}
                onChange={handleTitleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex text-[11px]">
              <input
                type="text"
                placeholder="Description..."
                value={taskDescription}
                onChange={handleDescriptionChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex items-center text-sm mt-2 text-black">
              <input
                type="checkbox"
                checked={allDay}
                onChange={handleAllDayToggle}
                className="mr-2"
              />
              <label htmlFor="allDay">All Day</label>
            </div>

            <div className="flex justify-center mt-4 text-[0.85rem]">
              <button onClick={handleAddTask} className="bg-blue-600 text-white px-3 py-1 rounded-md mr-2">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayColumn;