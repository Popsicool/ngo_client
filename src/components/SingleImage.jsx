import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SingleImg = ({ card }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0.5, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img src={card.img} />
      </div>
    </motion.div>
  );
};
