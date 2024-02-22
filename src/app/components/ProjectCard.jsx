import React from "react";
import Link from "next/link";
import { HiOutlineCodeBracket, HiEye } from "react-icons/hi2";

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  selected,
  idCard,
  onSelectCard,
}) {
  const buttonClasses = selected
    ? "col-span-12"
    : "col-span-12 md:col-span-4 lg:col-span-3";
  return (
    <div className={`mb-4 ${buttonClasses}`}>
      <div
        className="h-52 md:h-72 rounded-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {/* <Link
            href={gitUrl}
            className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link:"
          >
            <HiOutlineCodeBracket className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href={previewUrl}
            className="ml-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link:"
          >
            <HiEye className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link> */}
          <button
            onClick={() => onSelectCard(idCard)}
            className="ml-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link:"
          >
            <HiEye className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-slate-900 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        {selected && <p className="text-[#ADB7BE]">{description}</p>}
      </div>
    </div>
  );
}
