import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/modal.css";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const image = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};
export const Modal = ({ setShowModal, selected }) => {
  return (
    <>
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        onClick={() => setShowModal(false)}
      ></motion.div>
      {selected && (
        <motion.div
          className="img-wrap"
          variants={image}
          initial="hidden"
          exit="hidden"
          animate="visible"
        >
          <img src={selected} />
        </motion.div>
      )}
    </>
  );
};
