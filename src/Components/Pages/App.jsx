import React from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-row h-[94vh]">
        <Sidebar />
        <section className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">The Calendar View Goes Here</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
