"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentRoute = usePathname();

  // styles for all links
  const linkStyle =
    "flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-blue-600 duration-300";

  // styles for active and non-active links
  const activeStyle = linkStyle + " text-white text-4xl";
  const nonActiveStyle = linkStyle + " text-gray";
  return (
    <nav>
      <ul className="flex text-2xl justify-end p-10 font-bold shadow-2xl text-blue-700">
        <Link
          href="/"
          className={currentRoute === "/" ? activeStyle : nonActiveStyle}
        >
          Home
        </Link>

        <Link
          href="/projects"
          className={
            currentRoute === "/projects" ? activeStyle : nonActiveStyle
          }
        >
          Projects
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
