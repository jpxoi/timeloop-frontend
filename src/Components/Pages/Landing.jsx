import React from "react";
import LandingHeader from "../Organisms/LandingHeader";
import LandingBackground from "/src/assets/images/LandingBackground.png"
import Card1 from "/src/assets/images/Card1.png"
import Card2 from "/src/assets/images/Card2.png"

function Landing() {
  return (
    <div>
      <LandingHeader />
      <div className="min-w-max h-72 relative flex items-center justify-center">
        <img src={LandingBackground} className="w-full h-full"/>
        <h1 className="absolute top-16 text-4xl font-semibold">Effortless scheduling for busy lives.</h1>
        <h2 className="absolute top-28">Give yourself some free time by scheduling with TimeLoop.</h2>

        <img src={Card1} className="absolute left-0 w-[150px] h-auto"/>
        <img src={Card2} className="absolute right-0 w-[150px] h-auto"/>
      </div>
    </div>
  );
}

export default Landing;
