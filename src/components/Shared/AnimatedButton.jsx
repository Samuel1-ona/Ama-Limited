import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
};

export default AnimatedButton;

