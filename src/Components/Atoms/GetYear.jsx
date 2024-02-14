import React from "react";
import dayjs from "dayjs";

function GetYear() {
  dayjs.locale("en");
  const Year = dayjs().year();
  return <div>{Year}</div>;
}

export default GetYear;
