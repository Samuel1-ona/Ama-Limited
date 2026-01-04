import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Section from '../Shared/Section';

const PricingOverview = () => {
  const components = [
    {
      title: 'Device & Installation',
      description: 'One-time setup cost for the My GasTracker device and professional installation.',
    },
    {
      title: 'Monitoring & Analytics Subscription',
      description: 'Optional monthly or annual plans for real-time monitoring, alerts, and usage insights.',
    },
    {
      title: 'Optional Add-ons & Integrations',
      description: 'Additional features like predictive maintenance, smart home integrations, and custom reporting.',
    },
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          How Pricing Works
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          My GasTracker pricing is made up of three components:
        </Typography>

        <Grid container spacing={4}>
          {components.map((component, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    {component.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {component.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" sx={{ mt: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          This structure allows households, businesses, and partners to start small and scale over time.
        </Typography>
      </Box>
    </Section>
  );
};

export default PricingOverview;

