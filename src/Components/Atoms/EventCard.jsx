import React from "react";
import { XIcon } from "@heroicons/react/24/solid";

const EventCard = ({ onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[0.5rem] p-4 max-w-md w-full z-50">
      <button className="absolute top-0 left-0 p-2" onClick={onClose}>
        <XIcon className="h-6 w-6 text-gray-600" />
      </button>
      <h2 className="text-lg font-semibold mb-4">Event Title</h2>
      <p className="text-gray-700">Event description goes here...</p>
    </div>
  );
};

export default EventCard;


