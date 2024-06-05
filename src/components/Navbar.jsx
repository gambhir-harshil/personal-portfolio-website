import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const ref = useRef();

  return (
    <>
      <nav
        className="md:px-16 px-6 w-full flex py-5 
        items-center fixed top-0 z-20 bg-primary"
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="font-semibold text-[28px] text-white tracking-[10px] cursor-pointer"
            href="/"
            onClick={() => {
              ref.current.scrollTo(0, 0);
            }}
          >
            HARSHIL.
          </Link>
          <ul className="list-none hidden md:flex flex-row gap-10">
            <motion.li
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <a
                className="active:text-purple-50 text-secondary hover:text-white text-[18px] 
                font-medium cursor-pointer tracking-[2px] before:content-['01.'] before:text-white before:text-[14px] before:mr-1"
                href="#about"
              >
                About
              </a>
            </motion.li>
            <motion.li
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              <a
                className="active:text-white text-secondary hover:text-white text-[18px] 
                font-medium cursor-pointer tracking-[2px] before:content-['02.'] before:text-white
                before:text-[14px] before:mr-1"
                href="#projects"
              >
                Projects
              </a>
            </motion.li>
            <motion.li
              initial={{
                y: -100,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
            >
              <a
                className="active:text-white text-secondary hover:text-white text-[18px] 
                font-medium cursor-pointer tracking-[2px] before:content-['03.'] before:text-white 
                before:text-[14px] before:mr-1"
                href="#contact"
              >
                Contact
              </a>
            </motion.li>
            <motion.li>
              <a
                href="./resume.pdf"
                target="_blank"
                className="border border-secondary py-2 px-4 rounded-md hover:bg-white/20 transition-all ease-in-out"
              >
                Resume
              </a>
            </motion.li>
          </ul>
          <button
            className="md:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
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
          toggle ? "md:hidden" : "hidden opacity-0"
        } top-0 w-60 sm:w-[25rem] z-[9999] fixed`}
      >
        <motion.aside
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 0.8,
          }}
          transition={{ duration: 1 }}
          className="h-screen bg-primary/95 flex justify-center items-center"
        >
          <ul className="list-none md:hidden flex-col flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-gray-400 text-[36px] font-bold cursor-pointer text-white"
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            {/* <li className="hover:text-gray-400 text-[36px] font-bold cursor-pointer text-white">
              <a href="./resume.pdf">Resume</a>
            </li> */}
          </ul>
        </motion.aside>
      </div>
    </>
  );
};

export default Navbar;
