import React from "react";
import LogoImg from "/src/assets/images/logo.webp";

const Logo = () => {
  return (
    <div className="flex-auto">
      <img src={LogoImg} alt="Logo" className={"w-[88px] h-auto"} />
    </div>
  );
};

export default Logo;
