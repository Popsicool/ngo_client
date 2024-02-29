import React from 'react'
import { motion } from 'framer-motion'
import events from "./pevents"
import '../styles/upcoming.css'
import buttonVariant from './buttonVariant'
import sectionAnimate from "./slidingVariants";

export const UpcomingEvents = () => {
  return (
    <motion.div className='past-event-div'
    variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      >
        <h3 className='p-event-head'>Upcoming Events</h3>
        <motion.div>
            {events.map(event => {
                return(
                    <motion.div key={event.title} className='upcoming-event-card'>
                        <div className='upcoming-left'>
                        <div className='absolute-date'>
                                <div className='absolute-date-inner'>
                                    <p className='update'>23 July</p>
                                    <p className='upyear'>2024</p>
                                </div>
                            </div>
                            <motion.img
                             whileHover={{ scale: 1.3 }}
                             transition={{ duration: 1 }}
                            src={event.img} alt="upcoming" />
                            
                        </div>
                        <div className='upcoming-right'>
                            <h2 className='event-title'>{event.title}</h2>
                            <p className='event-text'>{event.description.length > 200 ? event.description.substring(0, 200) + '...' : event.description}</p>
                            <motion.button className='view-upcoming-btn'
                            variants={buttonVariant}
                            whileHover='hover'
                            >View</motion.button>
                            
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>

    </motion.div>
  )
}
