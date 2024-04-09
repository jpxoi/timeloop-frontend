import React from "react";
import { Link } from "react-router-dom";

function AddFriend() {
  const userID = localStorage.getItem("user_id");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-slate-200">
      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Want your friends to add you?</h1>
        <p className="text-center text-gray-500 w-[500px]">
          Share your user ID with your friends so they can add you.
        </p>

        <h3 className="text-xl font-bold mt-4">Your User ID</h3>
        
      </div>

      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4 mt-4">
        <h1 className="text-2xl font-bold">Add Friend</h1>

        <form className="flex flex-col items-center justify-center space-y-4 w-[500px]">
          <input
            type="text"
            placeholder="User ID"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Friend
          </button>

          <Link to="/app/profile" className="text-red-500 hover:underline">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;
