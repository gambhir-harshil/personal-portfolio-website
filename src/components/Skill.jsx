import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Skill = ({skill, id}) => {

    const [isMobile ,setIsMobile] = useState(false)

    useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    if (id % 2 == 0) {
        var transitionLeft = true
    } else {
        var transitionLeft = false
    }

  return (
    <motion.div
        initial={{
            x: transitionLeft ? 100 : -100,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{once: true}}
        transition={{
            duration: 1.5
        }}

        className='relative flex flex-col items-center justify-center cursor-pointer text-center'
    >
        <div className="absolute border border-[#ffffff] rounded-lg h-[50px] w-[50px] md:h-[80px] md:w-[80px] mr-5 animate-ping opacity-50"/>
        <div className=" absolute border border-[#915eff] rounded-lg h-[90px] w-[90px] md:h-[120px] md:w-[120px] mr-5 opacity-60"/>
        <div className=" absolute border border-[#915eff] rounded-lg h-[110px] w-[110px] md:h-[150px] md:w-[150px] mr-5 animate-pulse opacity-70" />
        <img
            src={skill} 
            alt="html"
            className=' relative object-cover h-16 w-16 md:h-24 md:w-24 mx-auto mr-4 ' 
        />
    </motion.div>
  )
}

export default Skill