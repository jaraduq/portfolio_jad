import React from "react";
import NavLink from "./Navlink";

export default function MenuOverlay({ link }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      <li>
        <NavLink href={"#about"} title={"About"} />
      </li>
      <li>
        <NavLink href={"#projects"} title={"Projects"} />
      </li>
      <li>
        <NavLink href={"#contact"} title={"Contact"} />
      </li>
    </ul>
  );
}
