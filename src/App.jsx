import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-cyan-500">
          {" "}
          Photographed by Ajay{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
