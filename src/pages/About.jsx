import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import { Helmet } from "react-helmet-async";
import { TopText } from "../components/TopText";
import "../styles/aboutpage.css";
import logo from "../assets/img/ssf2.jpg";
import pic1 from "../assets/img/ssf3.jpg";
import { Partners } from "../components/Partners";

export const About = () => {
  return (
    <motion.div
      variants={pageVariant}
      className="about-page"
      initial="start"
      animate="end"
    >
      <Helmet>
        <title>About | SICKLE CELL HEROES FOUNDATION</title>
      </Helmet>
      <TopText text="About us" />
      <motion.div className="about-hero">
        <div className="about-hero-back"></div>
        <h3 className="about-hero-text">
          You Have the Power to Make the world a better place for people with
          sicke cell
        </h3>
      </motion.div>
      <motion.div className="founder-corner">
        <h3 className="the-begining">How it started</h3>
        <motion.div className="beginning-corner-down">
          <div className="beginning-left">
            <img src={logo} alt="the beginning" />
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
                Our vision is to reduce the Burden of sicklecell Disease in
                Nigeria through awareness and research
              </li>
            </ul>
            <h3 className="omv">Our Mission</h3>
            <ul>
              <li>
                We raise awareness on Sicklecell Disease in Nigeria through Key
                advocacy initiatives and <strong>programmes</strong>. Our
                approach involves genotype compatibility awareness, free
                genotype testing and genetic counseling.
              </li>
              <br />
              <li>
                We hope to eliminate the <strong>stigma</strong> associated with
                Sicklecell Disease through compassion and education.
              </li>
              <li>
                We have a team of multidisciplinary medical consultants and
                community-oriented professionals, all working together to
                empower SCD patients to live a better and healthier lives. Our
                efforts are made possible through the generosity of caring
                individuals, corporations and foundations locally and hope to
                have collaboration with global institutions to provide
                cutting-edge research and SCD training to improve patient
                outcome
              </li>
            </ul>
          </div>
          <div className="beginning-left">
            <img src={pic1} alt="the beginning" />
          </div>
        </motion.div>
      </motion.div>
      <Partners />
    </motion.div>
  );
};
