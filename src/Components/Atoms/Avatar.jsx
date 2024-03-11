import React from "react";

const Avatar = ({Img}) => {

  return (
    <div className="">
      <img src={Img} alt="Random Profile Image" className={"w-[2.7rem] h-[2.7rem] rounded-full"} />
    </div>
  );
};

export default Avatar;