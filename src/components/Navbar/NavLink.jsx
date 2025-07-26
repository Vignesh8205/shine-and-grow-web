import React from "react";
import { Link } from "react-scroll";
const NavLink = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="relative inline-block px-4 py-2 font-bold group"
      >
        <span className="relative z-10 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
          {link}
        </span>
        <span className="absolute inset-0 w-full h-full bg-Teal rounded-lg transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
        <span className="absolute inset-0 w-full h-full border-spacing-0 border-Teal rounded-lg"></span>
      </Link>
    </li>
  );
};

export default NavLink;
