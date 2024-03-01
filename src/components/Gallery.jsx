import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import images from './Picture'
import buttonVariant from './buttonVariant'
import sectionAnimate from "./slidingVariants";
import "../styles/gallery.css"

const showtext = {
  hidden: {
    opacity: 0
  },
  visible:{
    opacity:1
  }
}


export const Gallery = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();
  
    useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

  
    return (
      <motion.div className='gallery'
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      >
        <div className='gallery-left'>
            <motion.h3 className='p-event-head'>Picture Gallery</motion.h3>
            <motion.button
            className='view-all-gallery-btn desk'
            variants={buttonVariant}
            whileHover='hover'
            >View Gallery</motion.button>
        </div>
        <motion.div className='carousel' ref={carousel}>
          <motion.div className='inner-carousel'
          drag="x"
          dragConstraints = {{right:0, left: -width}}
          whileTap={{cursor: "grabbing"}}
          >
            {images.map(image => {
              return(
                <motion.div key={image} className='item'
                whileHover={{scale:1.5}}>
                  <img src={image} alt="image"/>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        <motion.button
            className='view-all-gallery-btn mob'
            variants={buttonVariant}
            whileHover='hover'
            >View Gallery</motion.button>
      </motion.div>
    )

}
