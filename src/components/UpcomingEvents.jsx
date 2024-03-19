import React from "react";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../App";
import { Link } from "react-router-dom";
import "../styles/upcoming.css";
import buttonVariant from "./variants/buttonVariant";
import sectionAnimate from "./variants/slidingVariants";

export const UpcomingEvents = () => {
  const { upcomingEvents } = useSnapshot(state);
  return (
    <motion.div className="past-event-div">
      <h3 className="p-event-head">Upcoming Events</h3>
      <motion.div>
        {upcomingEvents.map((event) => (
          <motion.div
            key={event.title}
            className="upcoming-event-card"
            variants={sectionAnimate}
            initial="start"
            whileInView="end"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <div className="upcoming-left">
              <div className="absolute-date">
                <div className="absolute-date-inner">
                  {/* Format date here */}
                  <p className="update">
                    {new Date(event.date).getDate()}{" "}
                    {new Date(event.date).toLocaleString("en-US", {
                      month: "long",
                    })}
                  </p>
                  <p className="upyear">{new Date(event.date).getFullYear()}</p>
                </div>
              </div>
              <motion.img
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 1 }}
                src={event.banner}
                alt="upcoming"
              />
            </div>
            <div className="upcoming-right">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-text">
                {event.description.length > 200
                  ? event.description.substring(0, 200) + "..."
                  : event.description}
              </p>
              <Link to={`/uevent/${event.id}`}>
                <motion.button
                  className="view-upcoming-btn"
                  variants={buttonVariant}
                  whileHover="hover"
                >
                  View
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
