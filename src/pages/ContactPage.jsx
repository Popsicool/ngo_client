import React, { useState } from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import buttonVariant from "../components/variants/buttonVariant";
import { Helmet } from "react-helmet-async";
import { TopText } from "../components/TopText";
import "../styles/contactpage.css";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <motion.div
      variants={pageVariant}
      className="contact-page"
      initial="start"
      animate="end"
    >
      <Helmet>
        <title>Contact | NGO</title>
      </Helmet>
      <TopText text="Contact us" />
      <motion.div className="contactus-main">
        <motion.div className="contact-left">
          <h3 className="getintouch">Get in touch</h3>
          <p className="welook">We loook forward to receiving your message</p>
          <form className="contact-form">
            <input
              className="contact-inp"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />{" "}
            <br />
            <input
              className="contact-inp"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />{" "}
            <br />
            <input
              className="contact-inp"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />{" "}
            <br />
            <textarea
              className="contact-text-area"
              type="text"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              required
            />{" "}
            <br />
            <div className="cont-btn-wrap">
              <motion.button
                className="contact-btn"
                variants={buttonVariant}
                whileHover="hover"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
        <motion.div className="contact-right">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.541945617719!2d8.536572475001613!3d7.732191807938608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105081c65a00b225%3A0xa0e547e788801abb!2sFederal%20University%20Of%20Agriculture%2C%20Makurdi!5e0!3m2!1sen!2sng!4v1710426256764!5m2!1sen!2sng"
            className="map"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
