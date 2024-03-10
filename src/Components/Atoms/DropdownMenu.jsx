import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ArrowRightEndOnRectangleIcon, Cog8ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import AvatarImg from "/src/assets/images/RndProfilePic_2_.webp";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col rounded-[0.5rem] bg-white relative">

      <div className="flex items-center justify-between text-[11px] font-normal my-1 mx-1">
        <div className="flex items-center space-x-3 font-[500]">
          <button onClick={toggleMenu}>
            <Avatar Img={AvatarImg} />
          </button>
          <div className="">
            <button onClick={toggleMenu} className="flex flex-col justify-start">
              <div className="flex items-center space-x-1">
                <div>Hello, Micheal</div>
                <CheckBadgeIcon className="w-4 h-4 fill-blue-500" />
              </div>
              <div className="text-gray-500 font-light">michealrtn@mail.com</div>
            </button>
          </div>
        </div>
        <div>
          <button onClick={toggleMenu} className="flex items-center ">
            {isOpen ? <ChevronDownIcon className="h-4 w-4 font-[600]" /> : <ChevronUpIcon className="h-4 w-4 font-[600]" />}
          </button>
        </div>
      </div>

      <div className={`transition-all duration-[800ms] ${isOpen ? "max-h-[300px]" : "max-h-0"} overflow-hidden`}>
        <ul className="flex flex-col mt-4 text-[12px] font-[400]">
          <li className="flex border-2 border-white rounded-[0.5rem] py-2 px-2 hover:border-gray-200 space-x-2">
            <UserCircleIcon className="w-5 h-5" />
            <div className="">Profile</div>
          </li>
          <li className="flex border-2 border-white rounded-[0.5rem] py-2 px-2 hover:border-gray-200 space-x-2">
            <Cog8ToothIcon className="w-5 h-5" />
            <div className="">Settings</div>
          </li>
          <div className="border-b border-gray-300 w-full my-2" />
          <li className="flex border-2 border-white justify-between rounded-[0.5rem] py-2 px-2 hover:border-gray-200 text-red-600 space-x-2 font-[500]">
            <div className="">Log out</div>
            <div><ArrowRightEndOnRectangleIcon className="w-5 h-5" /></div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default DropdownMenu;










