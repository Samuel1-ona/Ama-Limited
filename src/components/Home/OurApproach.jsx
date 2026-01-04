import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Section from '../Shared/Section';

const OurApproach = () => {
  const principles = [
    {
      title: 'Safety First',
      description:
        'Gas safety is non-negotiable. Our systems prioritize early detection, clear alerts, and actionable information that helps prevent accidents.',
    },
    {
      title: 'Practical Technology',
      description:
        'We design for real conditions—connectivity constraints, installation realities, and diverse user needs. Technology should simplify, not complicate.',
    },
    {
      title: 'Data-Driven Impact',
      description:
        'Every deployment generates insights. Over time, aggregated data can help improve usage efficiency, reduce waste, and inform better gas management decisions.',
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Our Approach
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          We build with three principles in mind:
        </Typography>

        <Grid container spacing={4}>
          {principles.map((principle, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'white', textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    {index + 1}.
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {principle.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};

export default OurApproach;

