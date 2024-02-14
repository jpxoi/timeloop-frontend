import React from 'react';
import Logo from '../Atoms/Logo';
import NavbarProfile from '../Atoms/NavbarProfile';
import Button from '../Atoms/Button';
import LeftArrow from '../Atoms/LeftArrow';
import RightArrow from '../Atoms/RightArrow';
import DisplayMonthYear from '../Molecules/DisplayMonthYear';

export default function NavBar(){
  return (
    <div className="px-4 flex items-center justify-between border-b">
      <div className="flex items-center"> {/* Wrapper for Logo and Calendar and Today button */}
        <Logo/>
        <h1 className='mr-10 text-lg text-blue-400'>
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
