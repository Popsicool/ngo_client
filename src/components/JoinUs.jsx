import React from "react";
import { motion } from "framer-motion";
import "../styles/joinus.css";
import sectionAnimate from "./variants/slidingVariants";

export const JoinUs = () => {
  return (
    <motion.div
      className="joinus"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="join-left">
        <p className="jmove">Fight Sickle Cell Disease Together!</p>
        <p className="whyjoin">
          Be a part of the change. Sickle cell disease affects millions
          globally, but together we can make a difference. Join our fight for a
          cure. Your support can help us find a cure and improve the lives of
          those living with sickle cell disease.
        </p>
        <p className="whyjoin">
          Join our fight for a cure. Your support can help us find a cure and
          improve the lives of those living with sickle cell disease.
        </p>
        <h3 className="howjoin">How can you join us?</h3>
        <ul>
          <li className="whyjoin">
            Donate: Every contribution helps us fund critical research, provide
            patient support, and raise awareness.
          </li>
          <li className="whyjoin">
            Volunteer: Share your time and talents to help us achieve our
            mission.
          </li>
          <li className="whyjoin">
            Spread Awareness: Educate your friends, family, and community about
            sickle cell disease. Share our resources and stories on social
            media.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
