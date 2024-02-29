import React from 'react'
import {motion} from "framer-motion"
import "../styles/hero.css"


const heroVariant = {
    start:{
        scale:0
    },
    end:{
        scale:1,
        transition: {
            delay: .5,
            duration: 1,
            when: "beforeChildren",
            staggerChildren: .5
        }
    }
}

const innerVariant = {
    start:{
        x: "-100vw",
        opacity: 0
    },
    end:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}
const innerVariant2 = {
    start:{
        x: "100vw",
        opacity: 0
    },
    end:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}
export const Hero = () => {
  return (
    <motion.div className='hero'
    >
        <motion.div className='hero-inner'
        variants={heroVariant}
        initial="start"
        animate="end">
            <motion.h3
            className='hero-heading'
            variants={innerVariant}>
                A world of new possibilities
            </motion.h3>
            <motion.p className='hero-paragrah'
            variants={innerVariant2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat hic sunt unde rerum tempora nesciunt eligendi, placeat voluptates sed iste reprehenderit quas animi quis dolore quasi doloremque ex amet magni incidunt voluptatem facilis! Incidunt ipsa consequuntur sed doloribus velit facere quasi enim cum perspiciatis. Similique repudiandae reprehenderit porro quos?
            </motion.p>

        </motion.div>

    </motion.div>
  )
}
