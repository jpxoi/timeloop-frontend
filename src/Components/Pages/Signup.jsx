import React from "react";
import {Link} from "react-router-dom";

import LandingHeader from "../Organisms/LandingHeader";

function Signup() {
  return (
    <div className="flex flex-col h-screen">
      <LandingHeader />
      <div className="bg-[#F1FBFF] rounded-xl my-20 mx-48 flex-1 min-w-max grid grid-cols-2 justify-items-center content-start gap-5">
        <div className="col-span-2 self-start py-6">
          <h1 className="font-semibold text-3xl text-center p-2">Sign up</h1>
          <h1 className="text-center">Or <Link to="/Login" className="text-sky-600 hover:text-sky-400 underline">log in</Link> if you already have an account.</h1>
        </div>

        <input type="text" placeholder="First Name" className="ml-32 border-gray-300 rounded-xl"/>
        <input type="text" placeholder="Last Name" className="mr-32 border-gray-300 rounded-xl"/>
        <input type="text" placeholder="E-mail" className="col-span-2 border-gray-300 rounded-xl w-96"/>
        <input type="text" placeholder="User Name" className="col-span-2 border-gray-300 rounded-xl w-96"/>
        <input type="text" placeholder="Create Password" className="col-span-2 border-gray-300 rounded-xl w-96"/>
      </div>
    </div>
  );
}

export default Signup;
