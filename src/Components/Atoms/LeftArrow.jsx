import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const LeftArrow = ({ buttonparams, iconparams }) => {
  return (
    <button className={`${buttonparams}`}>
      <ChevronLeftIcon className={`${iconparams}`} />
    </button>
  );
};

export default LeftArrow;
