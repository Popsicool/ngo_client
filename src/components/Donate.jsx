import React from "react";
import buttonVariant from "../components/variants/buttonVariant";
import { motion } from "framer-motion";

export const Donate = () => {
  return (
    <div>
      <motion.div className="contact-down">
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="contact-card"
        >
          <h3>Partnership</h3>
          <p>
            We are open to partnership from other organizations of like mind,
            please reach out to us via the contact form or on our social media
            handles
          </p>
        </motion.div>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="contact-card"
        >
          <h3>Donations</h3>
          <p>Account Name: XYZ Foundation</p>
          <p>Account Number: 0111111111</p>
          <p>Bank: GTBank</p>
        </motion.div>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          className="contact-card"
        >
          <h3>Contact</h3>
          <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i> Joseph
            Sarwuan tarka univeristy Makurdi, Benue State
          </p>
          <p>
            <i className="fa fa-phone" aria-hidden="true"></i> 08032753239 |
            09147831980
          </p>
          <p>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
            schf@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
