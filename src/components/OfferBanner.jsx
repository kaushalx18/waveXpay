import React from "react";

export default function OfferBanner({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-4 shadow-card cursor-pointer hover:scale-[1.01] transform transition"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm font-semibold">Limited Time Offer</div>
          <div className="text-xs mt-1">Flat cashback on mobile & FASTag recharges</div>
          <div className="mt-3 inline-block bg-white/10 px-3 py-1 rounded-full text-xs">Explore offers</div>
        </div>

        <div className="w-24 h-20 bg-white/10 rounded-lg flex items-center justify-center">
          {/* simple illustrative SVG (replace later with exact from screenshot if you upload it) */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="12" rx="2" />
            <path d="M3 15h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
