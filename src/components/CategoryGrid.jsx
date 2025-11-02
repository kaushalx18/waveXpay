import React from "react";
import * as Icons from "lucide-react";

export default function CategoryGrid({ title = "Category", items = [], onClick }) {
  // icon mapping for each item name
  const iconMap = {
    "Mobile Recharge": Icons.Smartphone,
    "FASTag": Icons.CarFront,
    "DTH": Icons.Tv,
    "Loan Repayment": Icons.CreditCard,
    "Rent": Icons.Home,
    "Water": Icons.Droplets,
    "Electricity": Icons.Zap,
    "Cylinder": Icons.Flame,
    "Postpaid": Icons.SimCard,
    "Broadband": Icons.Wifi,
    "Credit Card": Icons.CreditCard,
    "Piped Gas": Icons.FlameKindling,
    "Donate": Icons.Heart,
    "Devotion": Icons.Hands,
    "Ram Mandir": Icons.Landmark,
    "Donate meal": Icons.Utensils,
    "LIC/Insurance": Icons.ShieldCheck,
    "Municipal Tax & Services": Icons.Building,
    "Recurring Deposit": Icons.PiggyBank,
    "NPS": Icons.FileText,
    "Clubs & Associations": Icons.Users,
    "Apartments": Icons.Building2,
    "Hospitals": Icons.Hospital,
    "Buy FASTag": Icons.CarFront,
    "Rental": Icons.Home,
    "NCMC Recharge": Icons.CreditCard,
    "Education Fees": Icons.Book,
    "Prepaid Meter": Icons.Gauge,
  };

  return (
    <div className="bg-white rounded-2xl p-3 shadow-card">
      <h3 className="text-sm font-semibold mb-3">{title}</h3>

      <div className="grid grid-cols-4 gap-3">
        {items.map((t, i) => {
          const Icon = iconMap[t] || Icons.Square; // default icon if not found
          return (
            <button
              key={i}
              onClick={() => onClick && onClick(t)}
              className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white hover:scale-105 transform transition"
            >
              <div className="w-10 h-10 rounded-lg border border-blue-100 flex items-center justify-center bg-blue-50 text-blue-600">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="text-[11px] text-center">{t}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
