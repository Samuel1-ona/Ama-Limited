import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Section from '../Shared/Section';

const OurCommitment = () => {
  const commitments = [
    'Building reliable, secure, and scalable technology',
    'Working with partners, installers, and regulators responsibly',
    'Continuously improving our products based on real-world feedback',
    'Measuring impact and being transparent about performance',
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Our Commitment
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          We are committed to:
        </Typography>

        <Grid container spacing={3} sx={{ maxWidth: '800px', mx: 'auto' }}>
          {commitments.map((commitment, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {commitment}
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

export default OurCommitment;

