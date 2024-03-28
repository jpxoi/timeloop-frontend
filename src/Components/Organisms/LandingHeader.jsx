import React from "react";
import Logo from "../Atoms/Logo";
import Button from "../Atoms/Button";
import {Link} from "react-router-dom";


function LandingHeader() {
    return(
        <header className="min-h-12 w-full flex items-center border-b-2 border-gray-200">
            <div className="p-1 w-fit">
                <Logo />
            </div>
            <Link to="/Signup" className="absolute right-2">
                <Button params={"text-white bg-[#0094FF] px-4 rounded-full min-h-8"}
                        text={"Sign up"}/>
            </Link>

            <Link to="/Login" className="absolute right-28">
                <Button params={"text-black px-4 rounded-full min-h-8 border-2 border-black"}
                        text={"Log in"}/>
            </Link>
        </header>
    );
}

export default LandingHeader;