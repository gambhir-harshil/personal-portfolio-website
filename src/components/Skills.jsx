import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillImg } from '../constants'

const Skills = () => {

  return (
    <div
        className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <motion.h3 
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='absolute top-24 uppercase md:tracking-[20px] tracking-[15px] text-secondary text-2xl'
        >
          Skills
        </motion.h3>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-20 mt-24">
          {skillImg.map((item) => (
            <Skill skill={item.img}/>
          ))}
        </div>
    </div>
  )
}

export default Skills