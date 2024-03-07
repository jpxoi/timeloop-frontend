import React from "react";
import {PencilSquareIcon, StarIcon} from "@heroicons/react/24/solid"


const Dashboard = () => {
    return (
        <div className="bg-white rounded-[0.5rem] px-3 py-2 mt-2 shadow-sm">
            <div className="text-[15px] font-medium my-2">
            Dashboard
            </div>
            <div class="flex justify-between">
                <div class="flex items-cetner rounded-[0.7rem] bg-[#0057FF] p-2 text-white text-[14px] space-x-1 ">
                    <PencilSquareIcon className="w-5 h-5 "/>
                    <div>Notes</div>
                </div>
                <div class="rounded-[0.7rem] bg-yellow-400 h-20 w-[85px]"></div>
                <div class="rounded-[0.7rem] bg-fuchsia-500 h-20 w-[85px]"></div>
            </div>
        </div>
    );
};

export default Dashboard;