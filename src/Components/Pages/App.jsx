import React, { useState } from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import dayjs from "dayjs";
import WeekView from "../Templates/WeekView";

function App() {
  const [NavCurrentMonth, NavSetCurrentMonth] = useState(
    dayjs().format("MMMM YYYY")
  );
  const [SideCurrentMonth, SideSetCurrentMonth] = useState(
    dayjs().format("MMMM YYYY")
  );

  const handleTodayButtonClick = () => {
    const today = dayjs().format("MMMM YYYY");
    NavSetCurrentMonth(today);
    SideSetCurrentMonth(today);
  };

  return (
    <div id="app-container" className="h-[110vh] flex flex-row">

      <Sidebar
        currentMonth={SideCurrentMonth}
        setCurrentMonth={SideSetCurrentMonth}
      />

      <div className="h-screen flex flex-col w-full ">

        <header>
          <Navbar
            currentMonth={NavCurrentMonth}
            setCurrentMonth={NavSetCurrentMonth}
            onTodayButtonClick={handleTodayButtonClick}
          />
        </header>

        <section className="flex justify-center overflow-auto">
          <WeekView />
        </section>

      </div>
    </div>

  );
}

export default App;
