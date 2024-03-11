import React, { useState } from "react";

function DayColumn() {
  const [selectedHour, setSelectedHour] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState({});
  const hourBlockStyle = "border-b border-l border-gray-200 min-h-12";
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

  const handleInputChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleAddTask = () => {
    if (selectedHour && taskDescription.trim() !== "") {
      setTasks({ ...tasks, [selectedHour]: taskDescription });
      setTaskDescription("");
      setOpen(false);
    }
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

            {tasks[hour] && <div className="p-2 flex flex-col text-wrap bg-yellow-300 m-3 rounded">{tasks[hour]}</div>}

          </div>
        );
      })}

      {isOpen &&(
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <input
              type="text"
              placeholder="Task description"
              value={taskDescription}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 mb-2"
            />
            <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayColumn;





