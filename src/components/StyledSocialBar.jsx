import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { socials } from "../constants";

const StyledSocialBar = () => {
  return (
    <div className="fixed bottom-0 xl:left-20 left-10 right-auto z-[99] w-10 hidden md:flex md:flex-col">
      <motion.ul
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="flex flex-col items-center list-none"
      >
        {socials.map((social, id) => (
          <li key={id} className="hover:scale-125 transition-all ease-in-out">
            <SocialIcon url={social} bgColor="transparent" fgColor="#aaa6c3" />
          </li>
        ))}
        <div className="w-[1px] h-[90px] m-auto bg-secondary mt-3" />
      </motion.ul>
    </div>
  );
};

export default StyledSocialBar;
