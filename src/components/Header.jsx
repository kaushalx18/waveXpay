import React from "react";
import { Bell, Wallet } from "lucide-react";

export default function Header({ onSearch }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#001b5e] to-[#0043aa] text-white sticky top-0 z-50 rounded-b-3xl shadow-md">
      {/* Left Section: Location */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold">
          W
        </div>
        <div>
          <div className="text-sm font-semibold">Location</div>
          <div className="text-[11px] opacity-80">Enter Location Manually</div>
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button
          className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
          title="Notifications"
        >
          <Bell size={18} />
        </button>

        {/* Wallet */}
        <button
          className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
          title="Wallet"
        >
          <Wallet size={18} />
        </button>

        {/* Search icon (responsive + logic retained) */}
        <button
          onClick={onSearch}
          className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
          title="Search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>

        {/* Profile */}
        <button
          className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
          title="Profile"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="3" />
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
