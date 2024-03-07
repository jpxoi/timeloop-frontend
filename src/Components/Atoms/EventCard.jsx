import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";

const EventCard = ({selectedDate, onClose}) => {
  let hourNow = dayjs().hour();
  let hourNext = dayjs().add(1, "hour").format("HH");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20">
      <div className="flex flex-col bg-white rounded-lg p-4 w-96 shadow-sm">
        <div  className="flex space-x-2 justify-between items-center">
          <div className="text-[17px] font-[390] text-gray-600">
            Add schedule
          </div>
          <div>
            <button>
              <div className="rounded-full px-2 bg-yellow-400 text-white">
                {`${hourNow}:00 - ${hourNext}:00`}

              </div>
            </button>
            <button className="" onClick={onClose}>
             <XMarkIcon className="w-4 h-4 fill-red-500"/>
            </button>
          </div>
        </div>


        <div className="bg-gray-100 rounded-[0.5rem] w-full min-h-32 my-5">

        </div>
        <p>Date: {selectedDate}</p>

        <button className="bg-blue-500 rounded-full text-white">
          Add
        </button>

      </div>
    </div>
  );
};

export default EventCard;


