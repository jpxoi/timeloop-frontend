import React from "react";
import Logo from "../Atoms/Logo";
import Button from "../Atoms/Button";


function LandingHeader() {
    function openLink(){
        //pass
    }

    return(
        <header className="min-h-12 w-full flex items-center border-b-2 border-gray-200">
            <div className="p-1 w-fit">
                <Logo />
            </div>
            <Button params={"text-white bg-[#0094FF] px-4 rounded-full absolute right-2 h-7"}
                    text={"Sign up"} 
                    action={openLink()}/>
        </header>
    );
}

export default LandingHeader;