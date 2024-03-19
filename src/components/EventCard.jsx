import React from "react";
import { motion } from "framer-motion";
import sectionAnimate from "./variants/slidingVariants";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"

const handleImageRetrieval = (imgArray) => {
  for (let i = 0; i < imgArray.length; i++) {
    const currentItem = imgArray[i];
    if (isImage(currentItem)) {
      return currentItem;
    }
  }
  return logo;
};

const isImage = (item) => {
  const extension = item.split('.').pop().toLowerCase();
  return ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
};


export const EventCard = ({ event }) => {
  const imgSrc = handleImageRetrieval(event.img);
  return (
    <motion.div
      className="event-card"
      key={event.title}
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="card-img">
        <motion.img
          src={imgSrc}
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
  );
};
