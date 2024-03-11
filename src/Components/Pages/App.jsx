import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";
import dayjs from "dayjs";
import WeekView from "../Templates/WeekView";
import NotFound from "./NotFound";

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
    <div id="app-container" className="h-screen flex flex-row">
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
          <Routes>
            <Route index element={<WeekView />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
