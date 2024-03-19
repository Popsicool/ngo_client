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
          <p>Account Name: Samson Kyakma Sukumun</p>
          <p>Account Number: 3010558492</p>
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
            <i className="fa fa-phone" aria-hidden="true"></i> +2348032753239
          </p>
          <p>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
            support@schf.org.ng
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
