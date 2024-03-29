import React from "react";
import LandingHeader from "../Organisms/LandingHeader";
import LandingBackground from "/src/assets/images/LandingBackground.webp";
import LandingTimePanel from "../Atoms/LandingTimePanel";
import LandingFooter from "../Organisms/LandingFooter";

import Card1 from "/src/assets/illustrations/Card1.svg";
import Card2 from "/src/assets/illustrations/Card2.svg";
import GlobeSymbol from "/src/assets/illustrations/GlobeSymbol.svg";
import WeekWrappedSymbol from "/src/assets/illustrations/WeekWrappedSymbol.svg";
import PeopleSymbol from "/src/assets/images/People.webp";
import Logo from "/src/assets/images/logo.webp";

import {Link} from "react-router-dom";

function Landing() {
  return (
    <div>
      <LandingHeader />

      <div className="min-w-max h-96 relative flex items-center justify-center">
        <img src={LandingBackground} className="w-full h-full"/>

        <img src={Logo} className="absolute top-6 w-[250px]"></img>
        <h1 className="absolute top-36 text-4xl font-semibold flex">Effortless scheduling for busy lives</h1>
        <p className="absolute top-48 flex text-2xl">Give yourself some free time by scheduling with TimeLoop.</p>
        <Link to="/Signup" className="flex absolute top-60 font-bold underline text-sky-600 hover:text-sky-500"><h2>Get started with TimeLoop here</h2></Link>

        <img src={Card1} className="absolute left-0 w-[150px] h-auto"/>
        <img src={Card2} className="absolute right-0 w-[150px] h-auto"/>
      </div>


      <h1 className="flex font-semibold text-4xl justify-center pt-28 text-center">Organise your time with the TimeLoop calendar</h1>
      <p className="flex text-2xl justify-center pt-2 text-center">TimeLoop provides you with an organised calendar environment to plan your time with.</p>
      <p className="flex justify-center">(Week view image here)</p>


      <div className="min-w-max max-w-screen grid grid-cols-3 gap-10 auto-cols-max justify-evenly justify-items-stretch items-center my-28 mx-40 p-10 bg-[#F1FBFF] rounded-lg">
        <div className="h-96 bg-white rounded-lg shadow-xl min-w-40">
          <h1 className="font-semibold text-2xl p-4"> <img src={GlobeSymbol} className="inline"></img> Sync<p className="inline text-red-600">2City</p> </h1>
          <p className="p-4 w-80">Easily view multiple time zones at a glance, enabling you to synchronise with colleagues, clients, or friends around the world.</p>

          <div className="rounded-lg h-14 mx-2 bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 relative">
            <h1 className="text-white font-semibold pt-2 pl-4">Singapore</h1>
            <h2 className="text-white pl-4 font-light absolute bottom-1">8 hours ahead, tomorrow</h2>
            <h1 className="text-white text-xl font-semibold absolute bottom-3 right-4">05:56</h1>
          </div>

          <LandingTimePanel city={"Rio de Janeiro"}
                              time_offset={"3 hours behind, Today"}
                              current_time={"18:56"} />
          
          <LandingTimePanel city={"Milano"}
                              time_offset={"1 hour ahead, Today"}
                              current_time={"22:56"} />
        </div>

        <div className="h-96 bg-white rounded-lg shadow-xl min-w-40">
          <h1 className="font-semibold text-2xl p-4"> <img src={WeekWrappedSymbol} className="inline"></img> Your Week Wrapped</h1>
          <p className="p-4 w-80">View a summary of how much time you spend doing what in your week, letting you optimise your schedule.</p>
        </div>

        <div className="h-96 bg-white rounded-lg shadow-xl min-w-40">
          <h1 className="font-semibold text-2xl p-4"> <img src={PeopleSymbol} className="inline w-8 h-8"></img> Get Social</h1>
          <p className="p-4 w-80">Share events with other people on TimeLoop, making coordination effortless. </p>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}

export default Landing;
