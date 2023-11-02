import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["I build things for the web", "I love coffee", "I love music"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-screen mx-auto space-y-8">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
            className={styles.heroHeadText}
          >
            Hi, I'm <span className="text-[#915eff]/80">Harshil</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            className={styles.heroSubText}
          >
            {text}
            <Cursor cursorColor="#915eff" />
          </motion.p>
        </div>
      </div>
      <EarthCanvas />
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
