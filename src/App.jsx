import React, { useState } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import ScanCard from "./components/ScanCard";
import CategoryGrid from "./components/CategoryGrid";
import QuickActions from "./components/QuickActions";
import Modal from "./components/Modal";
import SearchResults from "./components/SearchResults";
import OfferBanner from "./components/OfferBanner";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [modal, setModal] = useState(null);
  const [searchText, setSearchText] = useState("");

  const openModal = (title) => setModal(title);
  const closeModal = () => setModal(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      <Header onSearch={() => setActivePage("search")} />

      <div className="flex-1 overflow-y-auto p-4 pb-28">
        {/* ---------------- Home ---------------- */}
        {activePage === "home" && (
          <div className="space-y-5">
            <div className="mb-6">
              <ScanCard
                onPay={() => openModal("Pay")}
                onBills={() => openModal("My Bills")}
              />
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-card relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 font-bold">
                    CC
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Credit Card • XXX4562
                    </div>
                    <div className="text-xs text-red-500">
                      ₹1,200 due on Mon, 03 Nov
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => openModal("Pay")}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md"
                  >
                    Pay
                  </button>
                  <button
                    onClick={() => openModal("My Bills")}
                    className="px-3 py-1 bg-gray-100 rounded-md"
                  >
                    My Bills
                  </button>
                </div>
              </div>
            </div>

            <QuickActions onAction={(t) => openModal(t)} />

            <CategoryGrid
              title="Popular"
              items={["Mobile Recharge", "FASTag", "DTH", "Loan Repayment"]}
              onClick={(t) => openModal(t)}
            />

            <CategoryGrid
              title="Utilities"
              items={[
                "Rent",
                "Water",
                "Electricity",
                "Cylinder",
                "Postpaid",
                "Broadband",
                "Credit Card",
                "Piped Gas",
              ]}
              onClick={(t) => openModal(t)}
            />

            <OfferBanner onClick={() => openModal("Special Offer")} />

            <CategoryGrid
              title="Donations & Devotion"
              items={["Donate", "Devotion", "Ram Mandir", "Donate meal"]}
              onClick={(t) => openModal(t)}
            />

            <CategoryGrid
              title="Financial Services & Taxes"
              items={[
                "LIC/Insurance",
                "Municipal Tax & Services",
                "Recurring Deposit",
                "NPS",
                "Loan Repayment",
              ]}
              onClick={(t) => openModal(t)}
            />

            <CategoryGrid
              title="More Services"
              items={[
                "Clubs & Associations",
                "Apartments",
                "Hospitals",
                "Buy FASTag",
                "Rental",
                "NCMC Recharge",
                "Education Fees",
                "Prepaid Meter",
              ]}
              onClick={(t) => openModal(t)}
            />
          </div>
        )}

        {/* ---------------- Scan Page ---------------- */}
        {activePage === "scan" && (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-800 to-blue-600 text-white relative overflow-hidden">
            {/* Animated ScanCard */}
            <div className="w-11/12 max-w-sm">
              <ScanCard large />
            </div>

            {/* Scanning text */}
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">Scanning for QR Code...</p>
              <p className="text-sm text-white/80 mt-2">
                Align the code within the frame to scan automatically
              </p>
            </div>

            {/* Fake scanning light animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scanOverlay" />
            </div>
          </div>
        )}

        {/* ---------------- Search Page ---------------- */}
        {activePage === "search" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-3 shadow-card">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActivePage("home")}
                  className="p-2 text-gray-600"
                >
                  ←
                </button>
                <input
                  value={searchText}
                  onChange={handleSearch}
                  className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm"
                  placeholder="Search for a service..."
                />
                <div
                  className="w-9 h-9 rounded-md bg-blue-600 text-white flex items-center justify-center cursor-pointer"
                  onClick={() => setActivePage("search-results")}
                >
                  Go
                </div>
              </div>
            </div>

            {/* Default Search UI */}
            <SearchResults onSelect={(t) => openModal(t)} />
          </div>
        )}

        {/* ---------------- Search Results Page ---------------- */}
        {activePage === "search-results" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-3 shadow-card">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActivePage("search")}
                  className="p-2 text-gray-600"
                >
                  ←
                </button>
                <input
                  value={searchText}
                  readOnly
                  className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            <SearchResults query={searchText} onSelect={(t) => openModal(t)} />
          </div>
        )}

        {/* ---------------- History Page ---------------- */}
        {activePage === "history" && (
          <div className="text-center mt-10 text-gray-500">
            <p>No recent transactions</p>
          </div>
        )}
      </div>

      <BottomNav activePage={activePage} setActivePage={setActivePage} />

      {modal && <Modal title={modal} closeModal={closeModal} />}
    </div>
  );
}
