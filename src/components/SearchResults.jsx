import React from "react";
import CategoryGrid from "./CategoryGrid";
import OfferBanner from "./OfferBanner";

export default function SearchResults({ query = "", onSelect }) {
  const normalized = query.toLowerCase().trim();

  // --- CASE 1: If search is "credit card bill" ---
  if (normalized.includes("credit card")) {
    return (
      <div className="space-y-4">
        {/* 1. Search chips */}
        <div className="flex gap-2 flex-wrap">
          {["Credit card", "Bill Due", "Services", "How To", "Recharge"].map(
            (t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
              >
                {t}
              </span>
            )
          )}
        </div>

        {/* 2. Services Card */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Credit Card • xxxx4562
              </div>
              <div className="text-xs text-red-500">
                ₹1,200 due on Mon, 03 Nov
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md"
                onClick={() => onSelect && onSelect("Pay")}
              >
                Pay
              </button>
              <button
                className="px-3 py-1 bg-gray-100 text-sm rounded-md"
                onClick={() => onSelect && onSelect("My Bills")}
              >
                My Bills
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            WaveX guide to effortless credit card bill payments
          </p>
        </div>

        {/* 3. Upcoming Bill */}
        <div className="bg-white rounded-2xl p-4 shadow-card">
          <div className="flex justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-800">
              Upcoming Bill
            </h4>
            <button className="text-xs text-blue-600 font-semibold">
              View All
            </button>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-xl">
            <div>
              <div className="font-medium text-sm">Kaushal Singh</div>
              <div className="text-xs text-gray-600">8287501342</div>
              <div className="text-xs text-gray-500 mt-1">
                Plan of ₹1299 expires on 12 Nov 2025
              </div>
            </div>
            <button
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md"
              onClick={() => onSelect && onSelect("Recharge")}
            >
              Recharge
            </button>
          </div>
        </div>

        {/* 4. Popular Section */}
        <CategoryGrid
          title="Popular"
          items={["Mobile Recharge", "FASTag Recharge", "DTH", "Loan Repayment"]}
          onClick={(t) => onSelect && onSelect(t)}
        />

        {/* 5. Utilities Section */}
        <CategoryGrid
          title="Utilities"
          items={["Rent", "Water", "Electricity", "Cylinder"]}
          onClick={(t) => onSelect && onSelect(t)}
        />
      </div>
    );
  }

  // --- CASE 2: Default Search UI (normal offers etc) ---
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-3 shadow-card">
        <h4 className="font-semibold mb-2">Offers for you</h4>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {[
            "50% off on Recharge",
            "Cashback: FASTag",
            "DTH Recharge 2+1",
            "Loan offers",
            "Insurance deals",
          ].map((t, i) => (
            <div
              key={i}
              className="min-w-[140px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 text-sm"
            >
              <div className="font-medium">{t}</div>
              <div className="text-xs text-gray-600 mt-1">Limited time</div>
            </div>
          ))}
        </div>
      </div>

      <OfferBanner onClick={() => onSelect && onSelect("Featured Offer")} />

      <div className="bg-white rounded-2xl p-3 shadow-card">
        <h4 className="font-semibold mb-3">Recharge</h4>
        <CategoryGrid
          title=""
          items={["Mobile Recharge", "FASTag Recharge", "DTH", "Cable TV"]}
          onClick={(t) => onSelect && onSelect(t)}
        />
      </div>

      <div className="bg-white rounded-2xl p-3 shadow-card">
        <h4 className="font-semibold mb-3">Donations & Devotion</h4>
        <CategoryGrid
          title=""
          items={["Donate", "Devotion", "Ram Mandir", "Donate meal"]}
          onClick={(t) => onSelect && onSelect(t)}
        />
      </div>
    </div>
  );
}
