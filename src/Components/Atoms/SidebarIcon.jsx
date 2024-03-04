import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

function SidebarIcon() {

  const handleSidebar = () => {
    const sidebar = document.getElementById("app-sidebar");
    sidebar.classList.toggle("hidden");
  }

  return (
    <button onClick={handleSidebar} className="flex items-center hover:bg-gray-200 p-2 rounded-md">
      <Bars3BottomLeftIcon className="w-6 h-6" />
    </button>
  );
}

export default SidebarIcon;
