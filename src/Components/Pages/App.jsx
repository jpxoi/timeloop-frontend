import React from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import WeekView from "../Templates/WeekView";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-row h-[94vh]">
        <Sidebar />
        <section className="flex justify-center w-full">
          <WeekView />
        </section>
      </div>
    </div>
  );
}

export default App;
