import React from "react";

export default function Modal({ title, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-72 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-500 mb-4">This feature is coming soon!</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
