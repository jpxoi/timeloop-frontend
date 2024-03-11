import React from "react";
import { Link } from "react-router-dom";

function AccountSettings() {
  return (
    <div>
      <Link className="text-blue-500" to="/app">Back to App</Link>
      <h1>Account Settings</h1>
    </div>
  );
}

export default AccountSettings;
