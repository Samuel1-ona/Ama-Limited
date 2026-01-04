import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Section from '../Shared/Section';

const CTASection = () => {
  return (
    <Section backgroundColor="primary.main" py={10} id="contact">
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'white' }}>
          Let's Build Safer Gas Systems Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95, maxWidth: '700px', mx: 'auto' }}>
          Whether you're a household, business, distributor, or investor, we welcome collaboration in building safer and smarter gas solutions.
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
            href="mailto:amalimiteed@gmail.com?subject=Request a Demo"
          >
            Request a Demo
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
            href="/partners"
          >
            Partner With Us
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
            href="mailto:amalimiteed@gmail.com?subject=Investor Enquiry"
          >
            Investor Enquiries
          </Button>
        </Stack>
      </Box>
    </Section>
  );
};

export default CTASection;

