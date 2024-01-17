import React from "react";

export default function ProjectsTag({ nameTag, onSelectTag, selected }) {
  const borderStyle = selected
    ? "text-white border-purple-800"
    : "text-[#ADB7BE]border-slate-600 hover:border-white";
  return (
    <button
      className={`${borderStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onSelectTag(nameTag)}
    >
      {nameTag}
    </button>
  );
}
