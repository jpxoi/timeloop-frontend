import React from 'react';
import Logo from '../Atoms/Logo';
import NavbarProfile from '../Atoms/NavbarProfile';
import Button from '../Atoms/Button';
import LeftArrow from '../Atoms/LeftArrow';
import RightArrow from '../Atoms/RightArrow';
import DisplayMonthYear from '../Molecules/DisplayMonthYear';
import SidebarIcon from '../Atoms/SidebarIcon';

export default function NavBar(){
  return (
    <div className="px-4 flex h-[7vh] items-center justify-between border-b">
      <div className="flex items-center"> {/* Wrapper for Logo and Calendar and Today button */}
        <SidebarIcon />
        <Logo/>
        <h1 className='ml-2 mr-10 text-2xl text-blue-400'>
          Calendar
        </h1>
        <Button params="border rounded py-2 px-3 mx-1 text-xs border-gray-300" text="Today"/>
        <div className='flex justify-between mx-7'>
          <LeftArrow buttonparams="" iconparams="w-3 h-3 mr-3"/>
          <RightArrow buttonparams="" iconparams="w-3 h-3 ml-3"/>
        </div>
        <DisplayMonthYear params="text-black font-[400] text-[18px]"/>
      </div>
      <div className="flex items-center"> {/* Wrapper for Profile */}
        <NavbarProfile/>
      </div>
    </div>
  );
}
