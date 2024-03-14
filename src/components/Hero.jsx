import React from 'react'
import {motion} from "framer-motion"
import buttonVariant from "./variants/buttonVariant";
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
                Empowering Lives, Transforming Futures
            </motion.h3>
            <motion.p className='hero-paragrah'
            variants={innerVariant2}>
                Welcome to Sickel cell heroes foundation where we strive to make a difference in the lives of those affected by sickle cell disease. Our mission is to raise awareness, provide support, and advocate for better healthcare and policies for individuals and families impacted by this condition.
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
