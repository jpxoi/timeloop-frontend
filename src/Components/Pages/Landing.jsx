import React from "react";
import LandingHeader from "../Organisms/LandingHeader";
import LandingBackground from "/src/assets/images/LandingBackground.webp"
import Card1 from "/src/assets/illustrations/Card1.svg"
import Card2 from "/src/assets/illustrations/Card2.svg"
import Sync2City from "/src/assets/images/Sync2City.png";
import WeekWrapped from "/src/assets/images/WeekWrapped.png";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <div>
      <LandingHeader />
      <div className="min-w-max h-72 relative flex items-center justify-center">
        <img src={LandingBackground} className="w-full h-full"/>
        <h1 className="absolute top-16 text-4xl font-semibold">Effortless scheduling for busy lives.</h1>
        <h2 className="absolute top-28">Give yourself some free time by scheduling with TimeLoop.</h2>
        <Link to="/Signup" className="absolute top-36 font-bold underline text-sky-600 hover:text-sky-500"><h2>Get started with Timeloop here</h2></Link>

        <img src={Card1} className="absolute left-0 w-[150px] h-auto"/>
        <img src={Card2} className="absolute right-0 w-[150px] h-auto"/>
      </div>

      <img src={Sync2City} className="w-[300px] h-auto m-10 mr-52 ml-20 float-left"/>
      <img src={WeekWrapped} className="w-[300px] h-auto mt-10"/>
    </div>
  );
}

export default Landing;
