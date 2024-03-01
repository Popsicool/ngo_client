import React from 'react'
import {motion} from "framer-motion"
import pageVariant from '../components/PageVariants'
import { Helmet} from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { JoinUs } from '../components/JoinUs';
import { PastEvents } from '../components/PastEvents';
import { Gallery } from '../components/Gallery';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { Mission } from '../components/Mission';


export const Home = () => {
  return (
    <motion.div
    variants={pageVariant}
    initial="start"
    animate="end"
    exit="exit"
    >
      <Helmet>
        <title>HOME | NGO</title>
      </Helmet>
      <Hero/>
      <Mission/>
      <PastEvents/>
      <Gallery/>
      <UpcomingEvents/>
      <JoinUs/>
    </motion.div>
  )
}
