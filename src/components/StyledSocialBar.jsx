import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

const StyledSocialBar = () => {
  return (
    <div className="fixed bottom-0 xl:left-20 left-10 right-auto z-[99999] w-10 hidden md:flex">
        <motion.ul 
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 2
          }}
          className="flex flex-col items-center list-none">
          <li className="hover:scale-125 transition-all ease-in-out"> <SocialIcon url="https://www.instagram.com/gambhir_harshil/" bgColor="transparent" fgColor="#aaa6c3"/> </li>
          <li className="hover:scale-125 transition-all ease-in-out"> <SocialIcon url="https://github.com/gambhir-harshil" bgColor="transparent" fgColor="#aaa6c3" /> </li>
          <li className="hover:scale-125 transition-all ease-in-out"> <SocialIcon url="https://www.linkedin.com/in/gambhir-harshil/" bgColor="transparent" fgColor="#aaa6c3" /> </li>
          <li className="hover:scale-125 transition-all ease-in-out"> <SocialIcon url="https://www.spotify.link/Z7tpdNU9pyb" bgColor="transparent" fgColor="#aaa6c3" /> </li>
          <div className="w-[1px] h-[90px] m-auto bg-secondary mt-3"/>
        </motion.ul>
      </div>
  )
}

export default StyledSocialBar