import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Section from '../Shared/Section';

const PartnerCTA = () => {
  return (
    <Section backgroundColor="primary.main" py={10}>
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'white' }}>
          Interested in partnering with us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95, maxWidth: '700px', mx: 'auto', color: 'white' }}>
          Join us in making gas safer, smarter, and more efficient across Africa.
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
            href="mailto:amalimiteed@gmail.com?subject=Partner Enquiry"
          >
            Become a Partner
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
            href="mailto:amalimiteed@gmail.com?subject=Partner Enquiry"
          >
            Partner Enquiry
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
            href="mailto:amalimiteed@gmail.com?subject=Schedule a Call"
          >
            Schedule a Call
          </Button>
        </Stack>
        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic', opacity: 0.9, color: 'white' }}>
            My GasTracker is not just a device — it's a platform.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.9, color: 'white' }}>
            Together with our partners, we're building the future of gas safety and management in Africa.
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default PartnerCTA;

