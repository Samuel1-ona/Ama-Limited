import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../Shared/Section';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Section backgroundColor="primary.main" py={12}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 4,
                fontWeight: 700,
                color: 'white',
              }}
            >
              Building smarter, safer gas solutions for Africa
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                opacity: 0.95,
                color: 'white',
              }}
            >
              AMA Limited is a Nigerian technology company focused on smart gas monitoring, safety, and energy efficiency. We design IoT-enabled solutions that help households, businesses, and partners detect gas leaks early, monitor usage in real time, and manage cooking gas more efficiently.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mt: 3,
                lineHeight: 1.8,
                opacity: 0.9,
                color: 'white',
              }}
            >
              Our work sits at the intersection of safety, technology, and sustainability—addressing everyday gas risks while creating data-driven insights that improve decision-making over time.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Section>
  );
};

export default HeroSection;

