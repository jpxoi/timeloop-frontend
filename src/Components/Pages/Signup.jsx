import React from "react";
import {Link} from "react-router-dom";

import CloudDeco from "/src/assets/illustrations/CloudDeco.svg";
import CloudDecoInvert from "/src/assets/illustrations/CloudDecoInvert.svg";

import LandingHeader from "../Organisms/LandingHeader";

function Signup() {
function handleClick() {
  alert("Sign up button pressed");
}

  return (
    <div className="flex flex-col h-screen min-w-max relative">
      <LandingHeader />
      <div className="bg-[#F1FBFF] rounded-xl my-20 mx-60 flex-1 min-w-max grid grid-cols-2 justify-items-center content-start gap-5 py-5">
        <div className="col-span-2 self-start py-0">
          <h1 className="font-semibold text-3xl text-center p-2">Sign up</h1>
          <h1 className="text-center">Or <Link to="/Login" className="text-sky-600 hover:text-sky-400 underline">log in</Link> if you already have an account.</h1>
        </div>

        <input type="text" placeholder="First Name" className="ml-32 border-gray-300 rounded-xl"/>
        <input type="text" placeholder="Last Name" className="mr-32 border-gray-300 rounded-xl"/>
        <input type="text" placeholder="E-mail" className="col-span-2 border-gray-300 rounded-xl w-96"/>
        <input type="text" placeholder="User Name" className="col-span-2 border-gray-300 rounded-xl w-96"/>
        <input type="text" placeholder="Create Password" className="col-span-2 border-gray-300 rounded-xl w-96"/>


        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md col-start-2 ml-6" onClick={handleClick}>Sign up</button>
      </div>

      <img src={CloudDeco} className="w-[150px] absolute bottom-36"></img>
      <img src={CloudDecoInvert} className="w-[150px] absolute right-0 top-36"></img>
    </div>
  );
}

export default Signup;
