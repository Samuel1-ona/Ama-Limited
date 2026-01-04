import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../Shared/Section';

const AboutSection = () => {
  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          AMA Limited was founded to solve a simple but critical problem: gas safety and waste are still largely unmanaged in many homes and businesses.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          Across Africa, millions of households and small businesses depend on LPG for daily cooking and operations. Yet most gas usage remains invisible until something goes wrong—leaks, accidents, unexpected outages, or unnecessary waste.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 600 }}>
          We believe technology can change this.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          By combining IoT sensors, real-time monitoring, analytics, and alerts, AMA Limited is building practical solutions that fit real-world gas usage—without adding complexity to everyday life.
        </Typography>
      </Box>
    </Section>
  );
};

export default AboutSection;

