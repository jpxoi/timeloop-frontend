import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import AvatarImg from "/src/assets/images/RndProfilePic_2_.webp";


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuHeight(isOpen ? 0 : "auto");
  };

  return (
    <div className="flex flex-col p-2 border-2 rounded-[0.5rem] bg-white">

      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <button onClick={toggleMenu}>
            <Avatar Img = {AvatarImg} /> 
          </button>
          <button onClick={toggleMenu} className="font-[450] text-[14px]">
            Michael Cooper
          </button>
        </div>
        <div>
          <button onClick={toggleMenu} className="flex items-center ">
            {isOpen ? <ChevronUpIcon className="h-4 w-4 fill-red-500" /> : <ChevronDownIcon className="h-4 w-4 fill-green-600" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="rounded-b-lg overflow-hidden transition ease-in-out delay-150 duration-150">
          <ul className="flex flex-col my-4 text-[14px]">
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 1</li>
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 2</li>
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 3</li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default DropdownMenu;









