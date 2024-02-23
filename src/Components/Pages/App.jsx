import React, { useState } from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import dayjs from "dayjs";
import WeekView from "../Templates/WeekView";

function App() {
  const [NavCurrentMonth, NavSetCurrentMonth] = useState(dayjs().format("MMMM YYYY"));
  const [SideCurrentMonth, SideSetCurrentMonth] = useState(dayjs().format("MMMM YYYY"));

  const handleTodayButtonClick = () => {
    const today = dayjs().format("MMMM YYYY");
    NavSetCurrentMonth(today);
    SideSetCurrentMonth(today);
  };

  return (
    <div className="h-screen flex flex-col overflow-auto">
      <header>
        <Navbar currentMonth={NavCurrentMonth} setCurrentMonth={NavSetCurrentMonth} onTodayButtonClick={handleTodayButtonClick} />
      </header>

      <div id="app-container" className="flex flex-row h-full min-w-fit">
        <Sidebar currentMonth={SideCurrentMonth} setCurrentMonth={SideSetCurrentMonth} />
        <section className="flex justify-center w-full">
          <WeekView />
        </section>
      </div>
    </div>
  );
}

export default App;
