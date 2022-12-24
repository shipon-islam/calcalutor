import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbar } from "../../apis";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const { nav_logo, links } = navbar;
  return (
    <>
      <div className="bg-slate-900 w-full z-50 max-w-[1450px] mx-auto px-3 md:px-16 fixed top-0">
        <nav
          className="flex relative 
       justify-between items-center pt-2 "
        >
          <div>
            <Link to="/">
              <img className="w-[127px] md:w-40" src={nav_logo} alt="navLogo" />
            </Link>
          </div>
          <div
            className={`absolute lg:static w-3/4 ${
              toggle ? "scale-[0] lg:scale-[1]" : "scale-1"
            } lg:w-fit min-h-[89vh] lg:min-h-fit bg-slate-900 top-[89px]  pt-3 pr-3 transition-all duration-500 left-0 origin-top-left`}
          >
            {links.map((link) => (
              <NavLink
                key={link.id}
                className={`block lg:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b border-slate-600 lg:border-none md:text-md hover:text-blue my-${link.my}`}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "#0EA5E9" : "",
                  borderBottomColor: isActive ? "#0EA5E9" : "",
                })}
                end
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 transition-all duration-500 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  toggle
                    ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </nav>
      </div>
      <div className="pt-[89px]"></div>
    </>
  );
}
