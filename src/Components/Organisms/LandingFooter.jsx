import React from "react";
import {Link} from "react-router-dom";

import Logo from "/src/assets/images/logo.webp";

function LandingFooter() {
    return (
        <div className="bg-gray-100 border-t-2 border-t-gray-200 p-10 flex justify-around items-center">
            <img src={Logo} className="w-[75px]"></img>
            <Link className="hover:text-sky-500 hover:underline">Calendar</Link>
            <Link className="hover:text-sky-500 hover:underline">Account</Link>
            <Link to="/Signup" className="hover:text-sky-500 hover:underline">Sign up</Link>
        </div>
    );
}

export default LandingFooter;