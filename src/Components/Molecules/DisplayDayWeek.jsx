import React from "react";
import dayjs from "dayjs";

function DisplayDayWeek({ date = dayjs(), params }) {

    const dayOfMonth = date.format('D');
    const weekday = date.format('ddd');

    return (
        <div className={`${params} flex flex-col items-center`}>
            <div className="font-bold text-[34px] leading-none text-white ">{dayOfMonth}</div>
            <div className="font-[400] text-[12px] leading-none text-white">{weekday}</div>
        </div>
    );
}

export default DisplayDayWeek;
