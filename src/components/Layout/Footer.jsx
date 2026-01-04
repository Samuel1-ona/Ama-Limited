import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              AMA Limited
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Smart Gas Monitoring • Safety & Leak Detection • Real-Time Tracking • Sustainable Gas Management
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}>
                Home
              </Link>
              <Link href="/pricing" color="inherit" sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}>
                Pricing
              </Link>
              <Link href="/partners" color="inherit" sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}>
                Partners
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <EmailIcon fontSize="small" />
              <Link
                href="mailto:amalimiteed@gmail.com"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
              >
                amalimiteed@gmail.com
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © AMA Limited. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

