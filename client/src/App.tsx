import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import todoicon from "./assets/todoicon.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6 flex items-center justify-center">
        <div className="flex gap-6">
          <img
            src={todoicon}
            className="w-20 h-20 rounded-lg shadow hover:scale-105 transition-transform"
            alt="Todo icon 1"
          />
          <img
            src={todoicon}
            className="w-20 h-20 rounded-lg shadow hover:scale-105 transition-transform"
            alt="Todo icon 2"
          />
          <img
            src={todoicon}
            className="w-20 h-20 rounded-lg shadow hover:scale-105 transition-transform"
            alt="Todo icon 3"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
