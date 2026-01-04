import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@mui/material';

const AnimatedCard = ({ children, index = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  );
};

export default AnimatedCard;

