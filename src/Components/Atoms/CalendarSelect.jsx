import React from 'react';

function CalendarSelect({name, colour}) {
    // Provide the name of the calendar and desired colour as strings.
    const labelStyle = `text-${colour} font-semibold text-base text-left`;
    const boxStyle = `bg-${colour} border-${colour} text-${colour} m-3 rounded focus:ring-black focus:ring-1`;
    const formStyle = "display-block position-relative p-4"
    return (
        <form className={formStyle}>
            <label htmlFor={name} className={labelStyle}>{name}</label>
            <input type="checkbox" className={boxStyle} name={name} id={name}></input>
        </form>
    );
}

export default CalendarSelect;
