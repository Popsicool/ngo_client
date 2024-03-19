import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import buttonVariant from "../components/variants/buttonVariant";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/errorpage.css";
import err from "../assets/error.png"

export const Error = () => {
  return (
    <motion.div
      variants={pageVariant}
      className="error-page"
      initial="start"
      animate="end"
    >
      <Helmet>
        <title>404 | SICKLE CELL HEROES FOUNDATION</title>
      </Helmet>
      <div className="err-wrap">
        <img src={err} alt="error" />
      </div>
      <p className="error-text">
        We seem to have run into a bit of a problem with this page, kindly
        return home.
      </p>
      <Link to="/">
        <motion.button
        className="contact-btn error-btn"
        variants={buttonVariant}
        whileHover="hover"
        >Go Home
            </motion.button>
      </Link>
    </motion.div>
  );
};
