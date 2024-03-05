import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import { TopText } from "../components/TopText";
import "../styles/aboutpage.css";
import pic1 from "../assets/img/img1.jpg";

export const About = () => {
  return (
    <motion.div
      variants={pageVariant}
      className="about-page"
      initial="start"
      animate="end"
    >
      <TopText text="About us" />
      <motion.div className="about-hero">
        <div className="about-hero-back"></div>
        <h3 className="about-hero-text">
          You Have the Power to Make the world a better place for people with
          sicke cell
        </h3>
      </motion.div>
      <motion.div className="founder-corner">
        <h3 className="the-begining">The beginning</h3>
        <motion.div className="beginning-corner-down">
          <div className="beginning-left">
            <img src={pic1} alt="the beginning" />
          </div>
          <div className="beginning-right">
            <p>
              The movement started in the year 2023 when Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sapiente veritatis minus cumque
              eius. Necessitatibus hic, doloribus itaque molestias delectus iure
              id enim odio inventore iste assumenda, ipsam, facilis fuga
              voluptatum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              voluptate iusto delectus reprehenderit explicabo nesciunt, impedit
              quibusdam ut. Tempore laudantium itaque, facilis quod, optio,
              architecto excepturi dolore enim error natus odit. Mollitia,
              eligendi rem culpa inventore a vel, sapiente laborum ea eum, quis
              exercitationem voluptates expedita temporibus ipsam eius magnam
              atque velit? Debitis perspiciatis nulla cum modi aperiam
              repudiandae.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="founder-colored">
        <motion.div className="beginning-corner-down">
          <div className="beginning-right">
            <h3 className="omv">Our Vission</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                voluptatem deserunt consequatur earum accusantium, ratione
                molestiae omnis nisi quibusdam pariatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, eligendi ea quibusdam provident recusandae totam
                vitae rerum cumque quaerat perferendis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                harum nihil facere corrupti quos quis porro sapiente odit iste
                velit! Fugit sunt distinctio nesciunt? Tenetur?
              </li>
            </ul>
            <h3 className="omv">Our Mission</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid id quis sint inventore maxime quae tempora corrupti fuga voluptas.</li>
            </ul>
          </div>
          <div className="beginning-left">
            <img src={pic1} alt="the beginning" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="founder-corner">
        <h3>Our Partners</h3>
        <motion.div>
          List of partners
        </motion.div>

      </motion.div>
      <motion.div className="founder-colored">
        <h3>Join Us</h3>
        <div className="beginning-corner-down">
          <div>
            Donate
          </div>
          <div>
            Become a member
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};
