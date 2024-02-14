import React from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";

export default function Sidebar() {
  return (
    <div id="app-sidebar" className="h-screen w-1/5 border border-t-0 pt-4 pl-[1.5%]">
      <DisplayMonthYear params="text-black font-[450] text-[13px]" />
    </div>
  );
}
