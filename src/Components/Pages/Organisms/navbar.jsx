import React from 'react';
import Logo from '../Atoms/logo';
import Signup from '../Atoms/signup_button';

const Navbar = () => {
  return (
    <nav className="">
      <div className="border-b border-gray-300 flex justify-between items-center mx-auto pl-[4%] pr-[4%]">
        <div><Logo/></div> 
        <div className="">
          <ul className="flex items-center gap-[4vw]">
              <li><a href="#" className="text-lg text-black hover:text-[#0094FF]">Home</a></li>
              <li><a href="#" className="text-lg text-black hover:text-[#0094FF]">About</a></li>
              <li><a href="#" className="text-lg text-black hover:text-[#0094FF]">Services</a></li>
          </ul>
        </div>
        <div><Signup/></div>
      </div>
    </nav>
  );
};

export default Navbar;