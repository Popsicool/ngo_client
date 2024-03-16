import React from "react";
import { motion } from "framer-motion";
import "../styles/pastevents.css";
import buttonVariant from "./variants/buttonVariant";
import { Link } from "react-router-dom";
import { useSnapshot } from 'valtio';
import {state} from '../App'
import { EventCard } from "./EventCard";


export const PastEvents = () => {
  const {events} = useSnapshot(state);
  return (
    <motion.div
      className="past-event-div"
    >
      <motion.h3 className="p-event-head">Past Events</motion.h3>

      <motion.div className="past-events">
        {events.slice(0, 3).map((event) => {
          return (
            <EventCard event={event} key={event.id}/>
          );
        })}
      </motion.div>
      <div >
        <Link to="/events" className="view-btn-parent">
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            className="view-all-btn"
          >
            View All Events
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};
