import React from "react";
import { Link } from "react-router-dom";

function DeleteAccount() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-screen-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Delete Account</h1>

        <form className="flex flex-col items-center justify-center space-y-4 w-[300px]">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-2 bg-red-500 text-white font-semibold rounded-md"
          >
            Delete Account
          </button>
        </form>

        <Link to="/app/account" className="text-red-500 hover:underline">
          Cancel Deletion
        </Link>
      </div>
    </div>
  );
}

export default DeleteAccount;