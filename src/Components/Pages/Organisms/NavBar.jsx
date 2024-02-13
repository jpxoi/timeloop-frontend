import React from 'react';
import Logo from '../Atoms/Logo';
import NavbarProfile from '../Atoms/NavbarProfile';
import Button from '../Atoms/Button';
import LeftArrow from '../Atoms/LeftArrow';
import RightArrow from '../Atoms/RightArrow';

export default function NavBar(){
  return (
    <div className="px-4 flex items-center justify-between border-b">
      <div className="flex items-center"> {/* Wrapper for Logo and Calendar */}
        <Logo/>                 {/* This is the logo---Timeloop for our website*/}
        <h1 className='mr-10 text-lg text-blue-400'>
          Calendar
        </h1>
        <LeftArrow buttonparams="" iconparams="w-3 h-3 mx-2"/>
        <Button params="border rounded py-1 px-3 mx-1 text-sm border-gray-300" text="Today"/>
        <RightArrow buttonparams="" iconparams="w-3 h-3 mx-2"/>
      </div>
      <div className="flex items-center"> {/* Wrapper for Today button and Profile */}
        <NavbarProfile/>
      </div>
    </div>
  );
}
