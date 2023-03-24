import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='h-screen relative flex flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='absolute top-24 uppercase tracking-[20px] text-secondary text-xl'
        >
          projects
        </motion.h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>

        </ div>

        <div className='w-full absolute top-[30%] bg-[#915eff]/10 left-0 h-[500px] -skew-y-[9deg]'/>
    </div>
  )
}

export default Projects