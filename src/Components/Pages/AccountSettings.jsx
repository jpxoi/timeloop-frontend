import React from "react";
import { Link } from "react-router-dom";

function AccountSettings() {
  const userAvatar = localStorage.getItem("avatar_url");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Account Settings</h1>

        <div className="profile-pic w-24 h-24 bg-gray-300 rounded-full">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
          />
        </div>

        <Link to="/app/profile" className="text-blue-500 hover:underline">
          View Profile
        </Link>

        <Link to="/change-password" className="text-blue-500 hover:underline">
          Change Password
        </Link>

        <Link to="/change-avatar" className="text-blue-500 hover:underline">
          Change Avatar
        </Link>

        <Link to="/delete-account" className="text-red-500 hover:underline">
          Delete Account
        </Link>

        <Link to="/app" className="text-blue-500 hover:underline">
          Return to App
        </Link>
      </div>
    </div>
  );
}

export default AccountSettings;
