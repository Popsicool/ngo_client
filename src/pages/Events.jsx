import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import { Helmet} from 'react-helmet-async';
import { TopText } from "../components/TopText";
import "../styles/eventspage.css";
import events from "../components/variants/pevents";
import { EventCard } from "../components/EventCard";


export const Events = () => {
  return (
    <motion.div
      variants={pageVariant}
      className="about-page"
      initial="start"
      animate="end"
    >
      <Helmet>
        <title>Events | SICKLE CELL HEROES FOUNDATION</title>
      </Helmet>
      <TopText text="Events" />
      <div className="past-events-page">
        <h3 className="peventT">Our Previous events</h3>
        <motion.div className="past-events">
          {events.map((event) => {
            return (
              <EventCard event={event} key={event.id}/>
            );
          })}
        </motion.div>
      </div>
      
    </motion.div>
  )
}
