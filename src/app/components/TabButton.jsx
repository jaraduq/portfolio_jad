import React from "react";
export default function TabButton({ active, selecTab, children }) {
  const buttonClasses = active
    ? "text-white border-b border-purple-500 bg-slate-600"
    : "text-[#fff]";
  return (
    <button onClick={selecTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
