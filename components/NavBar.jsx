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
  const activeStyle = linkStyle + " text-blue-800";
  const nonActiveStyle = linkStyle + " text-white";
  return (
    <nav>
      <ul className="flex gap-10 text-2xl justify-end p-10 font-bold">
        <Link
          href="/"
          className={currentRoute === "/" ? activeStyle : nonActiveStyle}
        >
          <li>Home</li>
        </Link>

        <Link
          href="/projects"
          className={
            currentRoute === "/projects" ? activeStyle : nonActiveStyle
          }
        >
          <li> Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
