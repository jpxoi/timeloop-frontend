import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuHeight(isOpen ? 0 : "auto");
  };

  return (
    <div className="flex flex-col">

      <div className="flex items-center p-2 space-x-3 my-1">
          <Avatar/>
        <div className="font-[500]">
          Micheal Cooper
        </div>
        <button onClick={toggleMenu} className="flex items-center">
          {isOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
        </button>
      </div>

      {isOpen && (
      <div
        className="bg-white rounded-[0.5rem] overflow-hidden"
        style={{ maxHeight: menuHeight, transition: "max-height 0.9s ease-in-out" }}
      >
        {/* Dropdown menu content */}
        <ul className="">
          <li className="py-2 px-4 hover:bg-slate-100 border">Option 1</li>
          <li className="py-2 px-4 hover:bg-slate-100 border">Option 2</li>
          <li className="py-2 px-4 hover:bg-slate-100 border">Option 3</li>
        </ul>
      </div>
      )}

    </div>

  );
};

export default DropdownMenu;




