import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div
      className="h-screen relative flex flex-col text-left
      max-w-full justify-center mx-auto items-center overflow-hidden"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-24 uppercase tracking-[20px] text-secondary text-xl"
      >
        Contact
      </motion.h3>
      <div>
        <h2 className="text-center font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] text-[#915eff]">
          Get In Touch
        </h2>
        <p className="text-center text-secondary lg:text-[20px] sm:text-[20px] xs:text-[18px] text-[16px]">Got a question or proposal, or just want <br /> to say hello? Go ahead.</p>
      </div>
      <button className="mt-12 border border-secondary py-4 px-6 rounded-md hover:bg-white/20 transition-all ease-in-out"><a href="mailto:harshilgambhir3@gmail.com">Say Hello</a></button>
      <div className="absolute bottom-5 text-secondary text-sm hover:text-white cursor-pointer">
        <a href="https://github.com/gambhir-harshil">Built by Harshil Gambhir</a>
      </div>
      <div className="absolute bottom-10 md:hidden">
        <ul className="flex">
          <li> <SocialIcon url="https://www.instagram.com/gambhir_harshil/" bgColor="transparent" fgColor="#aaa6c3"/> </li>
          <li> <SocialIcon url="https://github.com/gambhir-harshil" bgColor="transparent" fgColor="#aaa6c3" /> </li>
          <li> <SocialIcon url="https://www.linkedin.com/in/gambhir-harshil/" bgColor="transparent" fgColor="#aaa6c3" /> </li>
          <li> <SocialIcon url="https://www.spotify.link/Z7tpdNU9pyb" bgColor="transparent" fgColor="#aaa6c3" /> </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
