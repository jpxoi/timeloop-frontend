import React from "react";
import { Link } from "react-router-dom";
import not_found_image from "../../assets/illustrations/not-found.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <img src={not_found_image} alt="404 Not Found" className="w-96 mb-4" />
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <Link to="/" className="text-2xl text-blue-500 hover:underline">
        Go back to the home page
      </Link>
    </div>
  );
}

export default NotFound;
