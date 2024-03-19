import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SingleImg = ({ card, setShowModal, setSelected}) => {
  const isImage = (url) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };
  const isVideo = (url) => {
    return /\.(mp4|ogg|webm)$/i.test(url);
  };
  const handleClick = (e) => {
    setShowModal(true)
    setSelected(e)
  }
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0.5, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        { isImage(card.url) ? <img src= {card.url} onClick={() => handleClick(card)} /> : isVideo(card.url) && <video controls>
          <source src={card.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video> }
      </div>
    </motion.div>
  );
};
