import React from "react";
import { User, Landmark, Repeat, Banknote } from "lucide-react";

export default function QuickActions({ onAction }) {
  const actions = [
    { icon: <User size={22} />, label: "Pay to Contact" },
    { icon: <Landmark size={22} />, label: "To Bank/UPI ID" },
    { icon: <Repeat size={22} />, label: "Self Account" },
    { icon: <Banknote size={22} />, label: "Check Balance" },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-card">
      <h3 className="text-sm font-semibold mb-3">Money Transfers</h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={() => onAction && onAction(a.label)}
            className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white hover:scale-105 transition"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              {a.icon}
            </div>
            <div className="text-[11px] text-center">{a.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
