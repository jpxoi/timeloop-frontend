import React, { useState } from "react";

const EventCard = () => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div className="flex justify-center items-center h-screen">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md p-4">
            <h2>Event Title</h2>
            <p>Event Description</p>
        </div>
    </div>
  );
};

export default EventCard;
