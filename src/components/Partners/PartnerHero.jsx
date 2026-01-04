import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../Shared/Section';

const PartnerHero = () => {
  return (
    <Section backgroundColor="primary.main" py={10}>
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, color: 'white' }}>
          Partner with My GasTracker
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 4, opacity: 0.95, color: 'white' }}>
          Deliver safer gas solutions at scale.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, color: 'white' }}>
          We work with installers, gas distributors, service providers, insurers, and ecosystem partners to expand access to smart gas safety and monitoring solutions across Africa.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mt: 2, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9, color: 'white' }}>
          My GasTracker is designed as a partner-first platform, enabling trusted local players to deliver safety, efficiency, and intelligence to their customers.
        </Typography>
      </Box>
    </Section>
  );
};

export default PartnerHero;

