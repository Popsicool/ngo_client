import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogos = ({ logos }) => {
    const logoVariants = {
        hidden: { x: '100%' }, // Start logos off-screen to the right
        visible: { x: 0, transition: { duration: 1, ease: 'easeOut' } },
        exit: { x: '-100%', transition: { duration: 1, ease: 'easeIn' } }
      };

  return (
    <motion.div className='partners-logo'>
      {logos.map((logo, index) => (
        <motion.div key={index} style={{ display: 'inline-block', marginRight: 10 }} className='partner-wrap'
        variants={logoVariants}>
                <img src={logo} alt="Sponsor Logo" />          
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedLogos;