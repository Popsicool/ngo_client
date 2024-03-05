import React from 'react'
import { motion } from 'framer-motion'
import sectionAnimate from "./variants/slidingVariants";
export const TopText = ({text}) => {
  return (
    <motion.div variants={sectionAnimate}
    initial='start'
    animate='end'>
        <h3 className='our-gallery-text'>{text}</h3>
    </motion.div>
  )
}
