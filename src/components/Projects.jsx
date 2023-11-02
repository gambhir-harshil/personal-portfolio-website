import React, { useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import Project from "./Project";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Projects = () => {
  const ref = useRef(null);

  function scrollLeft() {
    if (ref.current) {
      const scrollAmount = window.innerWidth < 768 ? 500 : 1000;
      ref.current.scrollLeft -= scrollAmount;
    }
  }

  function scrollRight() {
    if (ref.current) {
      const scrollAmount = window.innerWidth < 768 ? 500 : 1000;
      ref.current.scrollLeft += scrollAmount;
    }
  }

  return (
    <div
      className="h-screen relative flex flex-col text-left
     max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#915eff]/80"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-24 uppercase tracking-[20px] text-secondary text-xl"
      >
        projects
      </motion.h3>

      <div
        className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20"
        ref={ref}
      >
        {projects.map((project, id) => (
          <Project key={id} project={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#915eff]/10 left-0 h-[500px] -skew-y-[9deg] z-0" />
      <button
        onClick={scrollLeft}
        className="md:top-[45%] left-12 top-3/4 z-50 absolute"
      >
        <KeyboardArrowLeft fontSize="large" />
      </button>
      <button
        onClick={scrollRight}
        className="md:top-[45%] top-3/4 right-12 z-50 absolute"
      >
        <KeyboardArrowRight fontSize="large" />
      </button>
    </div>
  );
};

export default Projects;
