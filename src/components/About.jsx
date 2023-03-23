import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div
      className='h-screen relative flex flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden'>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='absolute top-24 uppercase md:tracking-[20px] tracking-[15px] text-secondary text-2xl'
        >
          About me
        </motion.h3>
        <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        src="https://wallpapercave.com/wp/wp8562126.png"
        className="-mb-20 mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 xl:w-[450px] xl:h-[550px]"
      />

      <div className='space-y-10 px-0 md:px-10'>
        <p className='text-base xl:text-lg text-secondary md:mt-20'>
         Hello! my name is Harshil and I enjoy what I do. I possess a unique
         set of skills that make me an invaluable asset to any project. I 
         have a deep understanding of of <span className='text-white'>JavaScript</span>, <span className='text-white'>HTML</span> and <span className='text-white'>CSS</span> and I am 
         able to use these languages to create dynamic and interactive user
         interfaces. Above, all I have a passion for using my skills to build
         innovative, cutting-edge web applications that make a difference in
         people's lives.
        </p>
      </div>
    </div>
  )
}

export default About