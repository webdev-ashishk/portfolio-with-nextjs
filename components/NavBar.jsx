import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className=" border-2 flex gap-10 text-2xl justify-end p-10">
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/projects">
          <li className="pr-10">Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
