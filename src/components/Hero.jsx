import React from 'react'
import {motion} from "framer-motion"
import buttonVariant from "./buttonVariant";
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
        scale: 0,
        opacity: 0
    },
    end:{
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}
const innerVariant2 = {
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

const innerVariant3 = {
    start:{
        y: "100vh",
        opacity: 0
    },
    end:{
        y: 0,
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
            <motion.div className='hero-btn-wrapper' variants={innerVariant3}>
                <motion.button className='hero-btn lmore'
                variants={buttonVariant}
                whileHover="hover"
                >
                    learn more
                </motion.button>

                <motion.button className='hero-btn donate'
                variants={buttonVariant}
                whileHover="hover"
                >
                    Donate
                </motion.button>
            </motion.div>

        </motion.div>

    </motion.div>
  )
}
