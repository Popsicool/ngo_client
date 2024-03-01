import React from 'react'
import {motion} from "framer-motion"
import "../styles/joinus.css"
import des from '../assets/des.png'
import buttonVariant from './buttonVariant'
import sectionAnimate from "./slidingVariants";


export const JoinUs = () => {
  return (
    <motion.div className='joinus'
    variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      >
        <motion.div className='join-left'>
            <p className='jmove'>Join The Movement</p>
            <p className='whyjoin'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</p>
            <form className='join-form'>
              <input placeholder='Your email address' className='sub-inp' type='email'/>
              <motion.button
              className='sub-btn'
        variants={buttonVariant}
        whileHover='hover'
        >
          Subscribe
        </motion.button>
            </form>
        </motion.div>
        <motion.div className="join-right"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, loop: Infinity, ease: "linear" }}
        >
          <img src={des} alt="logo"/>
        </motion.div>
    </motion.div>
  )
}
