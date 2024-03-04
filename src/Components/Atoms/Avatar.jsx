import React from "react";
import AvatarImg from "/src/assets/images/RndProfilePic_2_.webp";

const Avatar = () => {
  return (
    <div className="">
      <img src={AvatarImg} alt="Random Profile Image" className={"w-[3rem] h-[3rem] rounded-full"} />
    </div>
  );
};

export default Avatar;