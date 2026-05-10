import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const links = [
    {
      path: "/",
      text: "Home",
      icon: <RiHome2Line />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoMdTime />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <TfiStatsUp />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-42 p-2 shadow"
            >
              {links.map((item, index) => (
                <NavLinks key={index} href={item.path}>
                  <div className="flex items-center gap-1 font-semibold">
                    {item.icon}
                    {item.text}
                  </div>
                </NavLinks>
              ))}
            </ul>
          </div>
          <a className="text-xl">
            <span className="font-bold text-2xl">Keen</span>Keeper
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex justify-center items-center gap-5 ">
            {links.map((item, index) => (
              <NavLinks key={index} href={item.path}>
                <div className="justify-center flex items-center gap-1 font-semibold">
                  {item.icon}
                  {item.text}
                </div>
              </NavLinks>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
