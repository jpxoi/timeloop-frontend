import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import AvatarImg from "/src/assets/images/RndProfilePic_2_.webp";


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuHeight(isOpen ? 0 : "auto");
  };

  const handleFileUpload = (e) => {
    
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarSrc(reader.result); 
    };
    reader.readAsDataURL(file); 
  };

  return (
    <div className="flex flex-col p-2 border-2 rounded-[0.5rem] bg-white">

      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <button onClick={toggleMenu}>
            <Avatar Img = {avatarSrc || AvatarImg} /> 
          </button>
          <button onClick={toggleMenu} className="font-bold text-gray-800">
            Michael Cooper
          </button>
        </div>
        <div>
          <button onClick={toggleMenu} className="flex items-center ">
            {isOpen ? <ChevronUpIcon className="h-4 w-4 text-gray-600" /> : <ChevronDownIcon className="h-4 w-4 text-gray-600" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="rounded-b-lg overflow-hidden transition ease-in-out delay-150 duration-150">
          <ul className="flex flex-col my-4">
            <li className="flex rounded-full py-2 px-4 my-2  bg-blue-500  cursor-pointer justify-center text-white text-[15px] font-[550] " onClick={() => document.getElementById('fileInput').click()}>Edit Avatar</li>
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 1</li>
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 2</li>
            <li className="rounded-[0.5rem] py-2 px-4 hover:bg-gray-200">Option 3</li>
          </ul>
          <input type="file" id="fileInput" className="hidden" onChange={handleFileUpload} />
        </div>
      )}

    </div>
  );
};

export default DropdownMenu;









