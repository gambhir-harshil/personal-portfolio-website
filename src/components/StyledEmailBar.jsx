import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const StyledEmailBar = () => {
  return (
    <motion.div
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
      className="fixed bottom-0 xl:right-20 right-10 left-auto z-[99999] w-10 md:flex flex-col items-center hidden"
    >
      <a
        className="p-10 vertical-lr text-secondary text-sm hover:text-white hover:scale-110 transition-all ease-in-out"
        href="mailto:harshilgambhir3@gmail.com"
      >
        harshilgambhir3@gmail.com
      </a>
      <div className="w-[1px] h-[90px] m-auto bg-secondary" />
    </motion.div>
  );
};

export default StyledEmailBar;
