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
    <div className="px-4 flex min-h-16 items-center justify-between border-b">
      <div className="flex items-center"> {/* Wrapper for Sidebar Icon, Logo, Calendar and Today button */}
        <SidebarIcon />
        <Logo/>
        <h1 className='ml-2 mr-10 text-2xl text-blue-400'>
          Calendar
        </h1>
        <Button params="border rounded py-2 px-3 mx-1 text-xs border-gray-300" text="Today"/>
        <div className='flex justify-between mx-7'>
          <LeftArrow buttonparams="" iconparams="w-4 h-4 mr-2"/>
          <RightArrow buttonparams="" iconparams="w-4 h-4 ml-2"/>
        </div>
        <DisplayMonthYear params="text-black font-[400] text-lg"/>
      </div>
      <div className="flex items-center"> {/* Wrapper for Profile */}
        <NavbarProfile/>
      </div>
    </div>
  );
}
