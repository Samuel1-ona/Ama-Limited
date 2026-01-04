import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Section from '../Shared/Section';

const PartnerJourney = () => {
  const steps = [
    {
      number: '1',
      title: 'Apply',
      description: 'Submit a partner interest form',
    },
    {
      number: '2',
      title: 'Onboard',
      description: 'Receive training, tools, and certification',
    },
    {
      number: '3',
      title: 'Deploy',
      description: 'Install and manage My GasTracker for customers',
    },
    {
      number: '4',
      title: 'Scale',
      description: 'Grow deployments and recurring revenue together',
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          How Partnership Works
        </Typography>

        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', backgroundColor: 'white', textAlign: 'center' }}>
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {index < steps.length - 1 && (
                <Grid item xs={12} sm={6} md={0.5} sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}>
                  <ArrowForwardIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};

export default PartnerJourney;

