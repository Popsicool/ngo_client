import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import { Helmet } from "react-helmet-async";
import { Hero } from "../components/Hero";
import { JoinUs } from "../components/JoinUs";
import { PastEvents } from "../components/PastEvents";
import { Gallery } from "../components/Gallery";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { Mission } from "../components/Mission";
import { Facts } from "../components/Facts";
import { useSnapshot } from "valtio";
import { state } from "../App";

export const Home = () => {
  const { upcomingEvents } = useSnapshot(state);
  return (
    <motion.div
      variants={pageVariant}
      initial="start"
      animate="end"
      exit="exit"
    >
      <Helmet>
        <title>HOME | SICKLE CELL HEROES FOUNDATION</title>
      </Helmet>
      <Hero />
      <Facts />
      <Mission />
      <PastEvents />
      <Gallery />
      {upcomingEvents.length > 0 && <UpcomingEvents />}
      <JoinUs />
    </motion.div>
  );
};
