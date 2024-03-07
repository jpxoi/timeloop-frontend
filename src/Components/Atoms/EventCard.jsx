import React from "react";
import { XMarkIcon, PaperClipIcon, LinkIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";

const EventCard = ({selectedDate, onClose}) => {
  let hourNow = dayjs().hour();
  let hourNext = dayjs().add(1, "hour").format("HH");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20">
      <div className="flex flex-col bg-white rounded-lg p-4 w-96 shadow-sm">
        <div  className="flex space-x-2 justify-between items-center">
          <div className="text-[16px] font-[390] text-gray-600">
            Add schedule
          </div>
          <div>
            <button>
              <div className="rounded-full px-2 bg-yellow-400 text-white text-[15px]">
                {`${hourNow}:00 - ${hourNext}:00`}

              </div>
            </button>
            <button className="imtes-center" onClick={onClose}>
             <XMarkIcon className="w-4 h-4 fill-red-500"/>
            </button>
          </div>
        </div>


        <div className="flex flex-col bg-gray-100 rounded-[0.5rem] w-full min-h-32 my-5 text-gray-400 p-3">
          <div className="flex justify-end space-x-2 ">
            <button><PaperClipIcon className="w-4 h-4 hover:fill-blue-600"/></button>
            <button><LinkIcon className="w-4 h-4 hover:fill-blue-600"/></button>
          </div>
          Add task description...
        </div>

        <div>

          <button className="bg-blue-600 px-3 rounded-full text-white text-[13px]">
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventCard;


