import React, { useState } from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import dayjs from "dayjs";

function App() {
  const [NavCurrentMonth, NavSetCurrentMonth] = useState(dayjs().format("MMMM YYYY"));
  const [SideCurrentMonth, SideSetCurrentMonth] = useState(dayjs().format("MMMM YYYY"));

  const handleTodayButtonClick = () => {
    const today = dayjs().format("MMMM YYYY");
    NavSetCurrentMonth(today);
    SideSetCurrentMonth(today);
  };

  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar currentMonth={NavCurrentMonth} setCurrentMonth={NavSetCurrentMonth} onTodayButtonClick={handleTodayButtonClick} />
      </header>

      <aside className="h-screen">
        <Sidebar currentMonth={SideCurrentMonth} setCurrentMonth={SideSetCurrentMonth} />
      </aside>

      <section>
      </section>
    </div>
  );
}

export default App;
