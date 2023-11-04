import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectCube, EffectFlip } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { projects } from "../constants";
import Project from "./Project";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const Projects = () => {
  const swiper = useSwiper();

  const [activeSlide, setActiveSlide] = useState(0);

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

      <div className="relative w-full z-20">
        <Swiper
          modules={[Navigation, EffectFlip]}
          spaceBetween={10}
          slidesPerView={1}
          effect="flip"
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
        >
          {projects.map((project, id) => (
            <SwiperSlide key={id}>
              <Project project={project} />
            </SwiperSlide>
          ))}

          <div className="w-full absolute top-[30%] bg-[#915eff]/10 left-0 h-[500px] -skew-y-[9deg] z-0" />
          <button
            onClick={() => swiper.slidePrev()}
            className="md:top-[45%] left-12 top-3/4 z-50 absolute prev"
          >
            <KeyboardArrowLeft fontSize="large" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="md:top-[45%] top-3/4 right-12 z-50 absolute next"
          >
            <KeyboardArrowRight fontSize="large" />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
