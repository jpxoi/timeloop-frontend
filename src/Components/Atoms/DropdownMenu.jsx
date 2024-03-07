import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/solid";
import {ArrowRightEndOnRectangleIcon, Cog8ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import AvatarImg from "/src/assets/images/RndProfilePic_2_.webp";


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuHeight(isOpen ? 0 : "auto");
  };

  return (
    <div className="flex flex-col p-3 border-2 border-gray-300 rounded-[0.5rem] bg-white">

      <div className="flex items-center justify-between text-[13px] font-normal">
        <div className="flex items-center space-x-3 font-[500]">
          <button onClick={toggleMenu}>
            <Avatar Img = {AvatarImg} /> 
          </button>
          <div className="">
            <button onClick={toggleMenu} className="flex flex-col justify-start">
              <div className="">Hello, Micheal</div>
              <div className="text-gray-400 font-light">michealrtn@mail.com</div>
            </button>
          </div>
        </div>
        <div>
          <button onClick={toggleMenu} className="flex items-center ">
            {isOpen ? <ChevronUpIcon className="h-4 w-4 font-[600]" /> : <ChevronDownIcon className="h-4 w-4 font-[600]" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="rounded-b-lg overflow-hidden ">
          <ul className="flex flex-col mt-4 text-[14px] font-[400]">
            <li className="flex rounded-[0.5rem] py-2 px-1 space-x-2">
              <div className="">Micheal Cooper</div>
            </li>
            <li className="flex rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 hover:text-blue-600 space-x-2">
              <UserIcon className="w-5 h-5"/>
              <div className="">Profile</div>
            </li>
            <li className="flex rounded-[0.5rem] py-2 px-2 hover:bg-gray-100 hover:text-blue-600 space-x-2">
              <div><Cog8ToothIcon className="w-5 h-5"/></div>
              <div className="">Settings</div>
            </li>
            <div className="border-b border-gray-300 w-full my-2" />
            <li className="flex justify-between rounded-[0.5rem] py-2 px-2 hover:bg-gray-100  text-red-600 space-x-2 font-[500]">
              <div className="">Log out</div>
              <div><ArrowRightEndOnRectangleIcon className="w-5 h-5"/></div>

            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default DropdownMenu;









