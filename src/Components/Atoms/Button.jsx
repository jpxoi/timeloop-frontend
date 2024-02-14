import React from "react";

const Button = ({ params, text }) => {
  return <button className={`${params}`}>{text}</button>;
};

export default Button;
