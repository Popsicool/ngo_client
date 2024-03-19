import React from "react";
import pageVariant from "../components/variants/PageVariants";
import { Helmet } from "react-helmet-async";
import { TopText } from "../components/TopText";
import { useSnapshot } from "valtio";
import { state } from "../App";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

export const UpEvent = () => {
  const navigation = useNavigate();
  const { upcomingEvents } = useSnapshot(state);
  const { id } = useParams();
  const filterEvent = upcomingEvents.filter((event) => event.id == id);
  if (filterEvent.length < 1) {
    navigation("/events");
    return;
  }
  const singleEvent = filterEvent[0];
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
      <TopText text="Upcoming event" />
      <div className="indeventpage">
        <motion.div className="eventpageImg">
          <img src={singleEvent.banner} />
        </motion.div>
        <h2 className="p-event-head">{singleEvent.title}</h2>
        <p className="eventdescription">Description</p>
        <p className="event-text">{singleEvent.description}</p>
        <p className="eventdescription">Date</p>
        <p>{singleEvent.date}</p>
        <p className="eventdescription">Venue</p>
        <p>{singleEvent.venue}</p>
      </div>
    </motion.div>
  );
};
