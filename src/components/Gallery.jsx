import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import buttonVariant from "./variants/buttonVariant";
import sectionAnimate from "./variants/slidingVariants";
import { useSnapshot } from "valtio";
import { state } from "../App";
import "../styles/gallery.css";
import { Link } from "react-router-dom";

// const showtext = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//   },
// };

export const Gallery = () => {
  const { images } = useSnapshot(state);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const isImage = (url) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };
  const isVideo = (url) => {
    return /\.(mp4|ogg|webm)$/i.test(url);
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className="gallery"
      variants={sectionAnimate}
      initial="start"
      whileInView="end"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="gallery-left">
        <motion.h3 className="p-event-head">Picture Gallery</motion.h3>
        <Link to="/gallery">
          <motion.button
            className="view-all-gallery-btn desk"
            variants={buttonVariant}
            whileHover="hover"
          >
            View Gallery
          </motion.button>
        </Link>
      </div>
      <motion.div className="carousel" ref={carousel}>
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {images.slice(0, 8).map((image, index) => {
            return (
              <motion.div
                key={index}
                className="item"
                whileHover={{ scale: 1.5 }}
              >
                {isImage(image.url) ?  <img src={image.url} alt="image" /> : isVideo(image.url) && <video controls>
          <source src={image.url} type="video/mp4" />
          {/* Add additional source elements for other video formats if necessary */}
          Your browser does not support the video tag.
        </video>}
                
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <Link to="/gallery">
        <motion.button
          className="view-all-gallery-btn mob"
          variants={buttonVariant}
          whileHover="hover"
        >
          View Gallery
        </motion.button>
      </Link>
    </motion.div>
  );
};
