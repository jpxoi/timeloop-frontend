import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const LeftArrow = ({ buttonparams, iconparams }) => {
  return (
    <button className={`${buttonparams}`}>
      <ArrowLeftIcon className={`${iconparams}`} />
    </button>
  );
};

export default LeftArrow;
