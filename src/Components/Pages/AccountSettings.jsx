import React from "react";
import { Link } from "react-router-dom";

function AccountSettings() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/app">
        Go to Dashboard
      </Link>

      <h1 className="text-4xl font-bold">Account Settings</h1>
      <p className="text-lg">Welcome to your account settings page!</p>

      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="first-name"
        >
          First Name
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first-name"
          type="text"
          placeholder="First Name"
        />

        <label
          className="block text-gray-700 text-sm font-bold mt-4 mb-2"
          htmlFor="last-name"
        >
          Last Name
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last-name"
          type="text"
          placeholder="Last Name"
        />

        <label
          className="block text-gray-700 text-sm font-bold mt-4 mb-2"
          htmlFor="avatar"
        >
          Avatar
        </label>

        <h1> here goes the image uploader</h1>

        <label
          className="block text-gray-700 text-sm font-bold mt-4 mb-2"
          htmlFor="password"
        >
          New Password
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="New Password"
        />

        <label
          className="block text-gray-700 text-sm font-bold mt-4 mb-2"
          htmlFor="confirm-password"
        >

          Confirm New Password
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          placeholder="Confirm New Password"
        />

        <label
          className="block text-gray-700 text-sm font-bold mt-4 mb-2"
          htmlFor="current-password"
        >

          Current Password
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="current-password"
          type="password"
          placeholder="Current Password"
        />
      </div>

      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Save Changes
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          Change Password
        </button>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
