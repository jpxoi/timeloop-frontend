import React, { useState } from "react";
import RndProfilePic from "/src/assets/images/RndProfilePic_2_.webp";

const NavbarProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let isMouseOnDropdown = false;
  let isMouseOnImg = false;

  const imgMouseEnter = () => {
    isMouseOnImg = true;
    checkDropdownStatus();
  };

  const imgMouseLeave = () => {
    isMouseOnImg = false;
    checkDropdownStatus();
  };

  const dropdownMouseEnter = () => {
    isMouseOnDropdown = true;
    checkDropdownStatus();
  };

  const dropdownMouseLeave = () => {
    isMouseOnDropdown = false;
    checkDropdownStatus();
  };

  const checkDropdownStatus = () => {
    if (isMouseOnDropdown || isMouseOnImg) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        onMouseEnter={imgMouseEnter}
        onMouseLeave={imgMouseLeave}
        className="w-[2.2rem] h-[2.2rem] rounded-full cursor-pointer border-2"
        src={RndProfilePic}
        alt="User dropdown"
      />
      <span class="bottom-0 left-0 absolute w-[0.65rem] h-[0.65rem] bg-amber-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="border absolute z-20 right-0 mt-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          onMouseEnter={dropdownMouseEnter}
          onMouseLeave={dropdownMouseLeave}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Riccardo Romano</div>
            <div className="font-medium truncate">name@1234.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
              <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Status
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarProfile;
