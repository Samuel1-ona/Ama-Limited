import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Section from '../Shared/Section';

const WhyPartner = () => {
  const benefits = [
    'Expand your service offering with smart gas monitoring',
    'Increase customer trust and retention',
    'Reduce safety incidents and operational risks',
    'Unlock recurring revenue opportunities',
    'Differentiate your brand with technology-driven safety',
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Why Partner with My GasTracker
        </Typography>
        <Grid container spacing={3} sx={{ maxWidth: '900px', mx: 'auto' }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ color: 'success.main', mr: 2, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {benefit}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};

export default WhyPartner;

