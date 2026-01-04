import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Section from '../Shared/Section';

const PricingCTA = () => {
  return (
    <Section backgroundColor="primary.main" py={10}>
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'white' }}>
          Not sure which plan is right for you?
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95, maxWidth: '700px', mx: 'auto', color: 'white' }}>
          We'll help you choose the best setup based on your needs, location, and usage.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
            href="mailto:amalimiteed@gmail.com?subject=Request a Quote"
          >
            Request a Quote
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
            href="mailto:amalimiteed@gmail.com?subject=Book a Demo"
          >
            Book a Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
            href="mailto:amalimiteed@gmail.com?subject=Talk to Sales"
          >
            Talk to Sales
          </Button>
        </Stack>
        <Typography
          variant="body2"
          sx={{ mt: 6, opacity: 0.8, fontStyle: 'italic', maxWidth: '800px', mx: 'auto', color: 'white' }}
        >
          Final pricing may vary based on installation requirements, connectivity options, and service level. Pilot and early-adopter programs are available.
        </Typography>
      </Box>
    </Section>
  );
};

export default PricingCTA;

