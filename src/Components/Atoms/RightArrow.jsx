import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const RightArrow = ({ buttonparams, iconparams }) => {
  return (
    <button className={`${buttonparams}`}>
      <ArrowRightIcon className={`${iconparams}`} />
    </button>
  );
};

export default RightArrow;
