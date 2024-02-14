import React from "react";
import Navbar from "../Organisms/NavBar";
import Sidebar from "../Organisms/Sidebar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <aside>
        <Sidebar />
      </aside>

      <section></section>
    </div>
  );
}

export default App;
