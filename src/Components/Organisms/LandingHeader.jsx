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
            <Link to="/Signup" className="absolute right-2 h-7">
                <Button params={"text-white bg-[#0094FF] px-4 rounded-full"}
                        text={"Sign up"}/>
            </Link>
        </header>
    );
}

export default LandingHeader;