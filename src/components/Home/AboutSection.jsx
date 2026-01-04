import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../Shared/Section';
import AnimatedSection from '../Shared/AnimatedSection';

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <Section>
      <AnimatedSection>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
              Who We Are
            </Typography>
          </motion.div>
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
          >
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              AMA Limited was founded to solve a simple but critical problem: gas safety and waste are still largely unmanaged in many homes and businesses.
            </Typography>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
          >
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Across Africa, millions of households and small businesses depend on LPG for daily cooking and operations. Yet most gas usage remains invisible until something goes wrong—leaks, accidents, unexpected outages, or unnecessary waste.
            </Typography>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
          >
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 600 }}>
              We believe technology can change this.
            </Typography>
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
          >
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              By combining IoT sensors, real-time monitoring, analytics, and alerts, AMA Limited is building practical solutions that fit real-world gas usage—without adding complexity to everyday life.
            </Typography>
          </motion.div>
        </Box>
      </AnimatedSection>
    </Section>
  );
};

export default AboutSection;

