import React from "react";

export default function ScanCard({ compact, large, onPay, onBills }) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-blue-700 to-blue-600 p-4 shadow-lg overflow-hidden">
      <div className={`relative rounded-lg p-4 flex flex-col items-center justify-center ${large ? "h-56" : "h-44"}`}>
        {/* Background icon */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg
            width="180"
            height="180"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="8" rx="1" />
            <rect x="3" y="13" width="8" height="8" rx="1" />
            <rect x="13" y="13" width="8" height="8" rx="1" />
          </svg>
        </div>

        {/* Scan section */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="text-lg font-semibold text-white mb-4">
            {large ? "Tap to Scan" : "Quick Scan"}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-32 h-32 rounded-lg border-4 border-dashed border-orange-400 flex items-center justify-center scan-pulse">
              <div className="w-20 h-20 bg-white/10 rounded-md flex items-center justify-center">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="8" height="8" rx="1" />
                  <rect x="13" y="3" width="8" height="8" rx="1" />
                  <rect x="3" y="13" width="8" height="8" rx="1" />
                  <rect x="13" y="13" width="8" height="8" rx="1" />
                </svg>
              </div>
            </div>

            {/* Scanning line animation */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/30 rounded-full animate-scanLine" />
          </div>
        </div>
      </div>
    </div>
  );
}
