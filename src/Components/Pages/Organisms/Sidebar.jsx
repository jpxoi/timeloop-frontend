import React from "react";
import GetMonth from "../Atoms/GetMonth";
import GetYear from "../Atoms/GetYear";
import SmallCalendar from "../Molecules/SmallCalendar";

export default function Sidebar() {
    return (
      <div className="h-screen w-1/5 border pt-4 pl-[1.5%]">
        <div className="flex">
          <p className="text-black text-wrap text-sm font-[500] flex">
            <span className="inline">{GetMonth()}</span> 
            <span className="inline mx-2">{GetYear()}</span>
          </p>
        </div>
      </div>
    );
  }
  