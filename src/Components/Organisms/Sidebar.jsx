import React from "react";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";

export default function Sidebar() {
  return (
    <div className="h-screen w-1/5 border pt-4 pl-[1.5%]">
      <DisplayMonthYear params="text-black font-[450] text-[13px]" />
    </div>
  );
}
