import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { navLinks } from "../constants";
import { slideIn } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className="sm:px-16 px-6 w-full flex py-5 
        items-center fixed top-0 z-20 bg-primary"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="font-bold text-[28px] text-white">HARSHIL.</span>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <button
            className="sm:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-7 bg-white transform transition duration-200 ease-in-out ${
                  toggle ? "rotate-45 delay-100" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-100 ease-in-out ${
                  toggle ? "w-0 opacity-50" : "w-7 delay-100 opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-7 bg-white transform transition duration-200 ease-in-out ${
                  toggle ? "-rotate-45 delay-100" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
      <div
        className={`${
          toggle ? "sm:hidden" : "hidden opacity-0"
        } top-0 w-96 z-[9999] overflow-hidden fixed`}
      >
        <div className="h-screen bg-white flex justify-center items-center">
          <ul className="list-none sm:hidden flex-col gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-black" : "text-black"
                } hover:text-gray-400 text-[36px] font-medium cursor-pointer `}
                onClick={() => {setActive(link.title); setToggle(!toggle)}}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
