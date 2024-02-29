import React from "react";
import { motion } from "framer-motion";
import "../styles/pastevents.css";
import buttonVariant from "./buttonVariant";
import { Link } from "react-router-dom";
import sectionAnimate from "./slidingVariants";
import events from "./pevents";

export const PastEvents = () => {
  return (
    <motion.div
      className="past-event-div"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.h3 className="p-event-head">Past Events</motion.h3>

      <motion.div className="past-events">
        {events.map((event) => {
          return (
            <motion.div className="event-card" key={event.title}>
              <div className="card-img">
                <motion.img
                  src={event.img}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-text">
                  {event.description.length > 200
                    ? event.description.substring(0, 200) + "..."
                    : event.description}
                </p>
                <Link to="/">
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
          );
        })}
      </motion.div>
      <div className="view-btn-parent">
        <motion.button
          className="view-all-btn"
          variants={buttonVariant}
          whileHover="hover"
        >
          View All Events
        </motion.button>
      </div>
    </motion.div>
  );
};
