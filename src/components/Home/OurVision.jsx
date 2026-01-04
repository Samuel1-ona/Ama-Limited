import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../Shared/Section';

const OurVision = () => {
  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          We aim to become Africa's leading smart gas and energy safety IoT platform—supporting safer gas usage, improved efficiency, and sustainable energy outcomes across households, businesses, and institutions.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          Starting with My GasTracker, our long-term vision is to build a platform that delivers safety intelligence, operational insights, and scalable monitoring for Africa's growing gas economy.
        </Typography>
      </Box>
    </Section>
  );
};

export default OurVision;

