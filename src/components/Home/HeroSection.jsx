import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Section from '../Shared/Section';

const HeroSection = () => {
  return (
    <Section backgroundColor="primary.main" py={12}>
      <Box sx={{ textAlign: 'center', color: 'white' }}>
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
      </Box>
    </Section>
  );
};

export default HeroSection;

