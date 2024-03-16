import React from 'react'
import {motion} from "framer-motion"
import sectionAnimate from './variants/slidingVariants'
import { Link } from 'react-router-dom'


export const EventCard = ({event}) => {
  return (
    <motion.div className="event-card" key={event.title}
              variants={sectionAnimate}
              initial="start"
              whileInView="end"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.5 }}
              >
                <div className="card-img">
                  <motion.img
                    src={event.img[0]}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-text">
                    {event.report.length > 200
                      ? event.report.substring(0, 200) + "..."
                      : event.report}
                  </p>
                  <Link to={`/event/${event.id}`}>
                    <motion.span
                      className="event-read-more"
                      whileHover={{
                        color: "#f8e112",
                      }}
                    >
                      Read More
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
  )
}
