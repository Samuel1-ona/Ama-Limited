import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../Shared/Section';

const PricingHero = () => {
  return (
    <Section backgroundColor="primary.main" py={10}>
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'white' }}>
          My GasTracker Pricing
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 4, opacity: 0.95, color: 'white' }}>
          Simple, flexible pricing — built to scale with you
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, color: 'white' }}>
          Whether you're protecting a single household or managing gas across multiple locations, My GasTracker offers transparent pricing designed for safety, efficiency, and growth.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mt: 2, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, color: 'white' }}>
          Our pricing combines one-time hardware costs with optional monitoring and analytics plans, so you only pay for what you need as you grow.
        </Typography>
      </Box>
    </Section>
  );
};

export default PricingHero;

