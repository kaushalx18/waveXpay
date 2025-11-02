import React from "react";
import { Home, History, Camera } from "lucide-react";

export default function BottomNav({ activePage, setActivePage }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-lg rounded-t-2xl">
      <div className="flex justify-between items-center px-8 py-3 relative">

        {/* Home Button */}
        <button
          onClick={() => setActivePage("home")}
          className={`flex flex-col items-center transition-all ${
            activePage === "home" ? "text-yellow-400" : "text-white/70"
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>

        {/* Center Camera (Scan Button) */}
        <button
          onClick={() => setActivePage("scan")}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-700 p-4 rounded-full shadow-lg border-4 border-white"
        >
          <Camera size={28} />
        </button>

        {/* History Button */}
        <button
          onClick={() => setActivePage("history")}
          className={`flex flex-col items-center transition-all ${
            activePage === "history" ? "text-yellow-400" : "text-white/70"
          }`}
        >
          <History size={24} />
          <span className="text-xs">History</span>
        </button>
      </div>
    </div>
  );
}
