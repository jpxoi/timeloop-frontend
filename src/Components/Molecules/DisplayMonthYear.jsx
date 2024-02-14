import React from "react";
import GetMonth from "../Atoms/GetMonth";
import GetYear from "../Atoms/GetYear";

function DisplayMonthYear({ params }) {
  return (
    <div className="flex">
      <p className={`${params} text-wrap flex`}>
        <span className="inline">{GetMonth()}</span>
        <span className="inline mx-2">{GetYear()}</span>
      </p>
    </div>
  );
}

export default DisplayMonthYear;
