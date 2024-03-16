import React from 'react'
import {motion} from 'framer-motion'
import sc from "../assets/scimg.jpeg"
import sectionAnimate from "./variants/slidingVariants";
import buttonVariant from './variants/buttonVariant'

import "../styles/facts.css"
export const Facts = () => {
  return (
    <motion.div
    className='fact-wrap'
    variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
        <p className='quote'>'Over 300,000 children worldwide are born with the Sickle Cell Disease (SCD), a genetic abnormality of the red blood cells in which they take a crescent or "sickle"- shaped appearance. Over half of these children die before the age of five.'</p>
        <div className='fact'>
            <div className="fact-left">
                <motion.img src={sc} alt="ssc" 
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 1 }}
                />
            </div>
            <div className="fact-right-wrap">
                <div className="fact-right">
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>Although sickle cell can affect people all around the world, the risk is higher in Africans or people of African descent.</p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>All six geopolitical zones of Nigeria had at least a 10% prevalence of the S allele, whereas C allele prevalence was highest in the south-west zone and nearly absent in the eastern part of the country</p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>People who have the sickle cell disease may develop various complications such as anaemia, stroke, tissue, organ and bone damage as well as pain due to the inability of the sickle-shaped red blood cells to carry oxygen normally and to cause blockage of blood vessels.</p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>People with the genotype AS, are carriers of the Sickle Cell Trait (SCT) but do not suffer any symptoms of Sickle Cell Disease. They can however pass it on to their children.</p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>There is no cure for SCD yet. Although, some success has been recorded with bone marrow transplants.</p>
                    </motion.div>
                    <motion.div 
                    variants={buttonVariant}
            whileHover='hover'
            className="fact-card">
                        <p>A person with SCD can live a long and active life as long as they undergo regular check-ups with a doctor, take their medications regularly, prevent infections through hygienic practices such as handwashing and drink lots of water. </p>
                    </motion.div>
                </div>
                <div className='sources'>
                    <p>Sources: </p>
                    (1) <a className='source-link' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8460996/">National Library of medicine</a> (2) <a className='source-link' href="https://www.ehealthafrica.org/blog/2018/6/19/world-sickle-cell-day-6-facts-you-need-to-know">eHealth</a>
                </div>
            </div>

        </div>
    </motion.div>
  )
}
