import React from "react";
import { motion } from "framer-motion";
import pageVariant from "../components/variants/PageVariants";
import { Helmet } from "react-helmet-async";
import { TopText } from "../components/TopText";
import "../styles/aboutpage.css";
import logo from "../assets/img/ssf2.jpg";
import pic1 from "../assets/img/img8.jpg";
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
              The movement was started in 2023 by Dr Miss Kyakma Samson Sukumun
              (B.sc. Msc. PhD) a lecturer at Joseph Sarwuan Tarka University
              Makurdi formally University of Agriculture Makurdi, Benue State
              Nigeria.
            </p><br />
            <p>
              Having survived sickle cell for 35years with many complications
              and losing family members to this great pain, therefore, decided
              to join the Forces of eradicating sickle cell in Nigeria by
              establishing the Sickle Cell Heroes Foundation which is aimed at
              awareness creation, passing of vital information on sickle cell
              causes, diagnosis and complications plus measures to take to stay
              healthy/alive, giving help/aids, medication to sickle cell
              patients. And also more to this, our vision is to reduce the
              burden of sickle cell disease in Nigeria through awareness and
              research, key advocacy programmes which involve Genotype
              compatibility awareness, free testing and genetic counselling.
            </p><br />
            <p>
              We also hope to eliminate the stigma associated with sickle cell
              through education and proper counselling. we have a platform for
              the foundation on different social media handles. In the Heroes
              Whatsapp foundation platform we pass information, and quizzes on
              sickle cell health tips, we do what is called prime time every 1st
              Sunday of the month allowing our great warriors to share their
              stories, and experiences on the life race with sickle cell
              complications, sets backs and victory all intertwined.
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
