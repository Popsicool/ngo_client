import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SingleImg } from "../components/SingleImage";
import { Helmet } from "react-helmet-async";
import pageVariant from "../components/variants/PageVariants";
import buttonVariant from "../components/variants/buttonVariant";
import { useSnapshot } from "valtio";
import { state } from "../App";
import "../styles/gallerypage.css";
import { TopText } from "../components/TopText";
import { Modal } from "../components/Modal";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-btns">
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className={filter === "" ? "ftr-btn active-btn" : "ftr-btn"}
        onClick={() => setFilter("")}
      >
        All
      </motion.button>
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className={filter === "picture" ? "ftr-btn active-btn" : "ftr-btn"}
        onClick={() => setFilter("picture")}
      >
        Pictures
      </motion.button>
      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        className={filter === "video" ? "ftr-btn active-btn" : "ftr-btn"}
        onClick={() => setFilter("video")}
      >
        Videos
      </motion.button>
    </div>
  );
};

export const GalleryPage = ({setShowModal, setSelected}) => {
  const { images } = useSnapshot(state);
  const [collection, setCollection] = useState(images);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (filter === "") {
      setCollection(images);
      return;
    }
    setCollection(images.filter((each) => each.type === filter));
  }, [filter]);
  
  return (
    <motion.div
      variants={pageVariant}
      initial="start"
      animate="end"
      exit="exit"
    >
      <Helmet>
        <title>Gallery | SICKLE CELL HEROES FOUNDATION</title>
      </Helmet>
      <TopText text="Our Gallery" />
      <div className="gallerypage">
        <Filter setFilter={setFilter} filter={filter} />
        <motion.div className="gallery-outer" layout>
          <AnimatePresence>
            {collection.map((each, idx) => {
              return <SingleImg card={each} key={idx} setShowModal={setShowModal} setSelected={setSelected}/>;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
