import React from "react";
import { motion } from "framer-motion";
import sectionAnimate from "./variants/slidingVariants";
import "../styles/mission.css";
import m1 from "../assets/mission/m1.svg";
import m2 from "../assets/mission/m2.svg";
// import m3 from "../assets/mission/m3.svg";
// import m4 from "../assets/mission/m4.svg";

const data = [
  {
    img: m1,
    head: "Our Vission",
    body: "Our vision is to reduce the Burden of sicklecell Disease in Nigeria through awareness and research",
  },
  {
    img: m2,
    head: "Our Mission",
    body: "We raise awareness on Sicklecell Disease in Nigeria through Key advocacy initiatives and programmes. Our approach involves genotype compatibility awareness, free genotype testing and genetic counseling.",
  },
  // {
  //     img: m3,
  //     head: "Councelling",
  //     body: "There are many variations of lore passagei of Lorem Ipsum available but the majority have"
  // },
  // {
  //     img: m4,
  //     head: "CTY",
  //     body: "There are many variations of lore passagei of Lorem Ipsum available but the majority have"
  // },
];

export const Mission = () => {
  return (
    <motion.div
      className="mission"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.h3 className="p-event-head">Vision and Mission</motion.h3>
      <motion.div className="mission-grid">
        {data.map((each) => {
          return (
            <motion.div className="misson-card" key={each.head}>
              <div className="mission-left-wrap">
                <div className="mission-left">
                  <img src={each.img} />
                </div>
              </div>
              <div className="mission-right">
                <p className="mission-head">{each.head}</p>
                <p className="mission-body">{each.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
