import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const AvatarURL = localStorage.getItem("avatar_url");
  const FirstNameSpan = localStorage.getItem("first_name");
  const LastNameSpan = localStorage.getItem("last_name");
  const UsernameSpan = localStorage.getItem("username");
  const EmailSpan = localStorage.getItem("email");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center m-auto bg-gray-100">
      <div className="w-lg bg-white shadow-md rounded-lg flex flex-col items-center justify-center py-8 px-8 space-y-4">
        <h1 className="text-2xl font-bold">Profile</h1>

        <div className="profile-pic w-24 h-24 bg-gray-300 rounded-full">
          <img
            src={AvatarURL}
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-lg font-semibold">
            First Name:{" "}
            <span className="text-gray-500 font-normal">{FirstNameSpan}</span>
          </p>

          <p className="text-lg font-semibold">
            Last Name:{" "}
            <span className="text-gray-500 font-normal">{LastNameSpan}</span>
          </p>

          <p className="text-lg font-semibold">
            Username:{" "}
            <span className="text-gray-500 font-normal">@{UsernameSpan}</span>
          </p>

          <p className="text-lg font-semibold">
            Email:{" "}
            <span className="text-gray-500 font-normal">{EmailSpan}</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <Link to="/app/account" className="text-blue-500 hover:underline">
            Account Settings
          </Link>
        </div>

        <Link to="/app" className="text-blue-500 hover:underline">
          Return to App
        </Link>
      </div>
    </div>
  );
}

export default Profile;
