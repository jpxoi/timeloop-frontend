import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const RightArrow = ({ buttonparams, iconparams }) => {
  return (
    <button className={`${buttonparams}`}>
      <ChevronRightIcon className={`${iconparams}`} />
    </button>
  );
};

export default RightArrow;
