import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Section from '../Shared/Section';

const WhatWeBuild = () => {
  const features = [
    'Detect potential gas leaks early',
    'Provide real-time visibility into gas usage',
    'Send automated alerts when risks or abnormal patterns are detected',
    'Help users plan refills and reduce waste',
    'Support safer, more efficient gas use',
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          What We Build
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}
        >
          Our first product, My GasTracker, is an IoT-enabled gas monitoring and safety platform designed to:
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ color: 'success.main', mr: 2, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {feature}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          My GasTracker is built to scale—from individual households to restaurants, SMEs, and multi-site operators, and eventually to broader gas distribution and management use cases.
        </Typography>
      </Box>
    </Section>
  );
};

export default WhatWeBuild;

