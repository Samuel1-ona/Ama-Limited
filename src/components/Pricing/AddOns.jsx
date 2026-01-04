import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Section from '../Shared/Section';

const AddOns = () => {
  const addOns = [
    'Predictive maintenance insights',
    'Smart home system integrations',
    'Partner-specific dashboards',
    'Custom reporting & analytics',
    'Extended support & service-level agreements (SLAs)',
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Optional Add-Ons
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          Enhance your My GasTracker experience with these optional features:
        </Typography>

        <Grid container spacing={3} sx={{ maxWidth: '900px', mx: 'auto' }}>
          {addOns.map((addOn, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AddCircleIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {addOn}
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

export default AddOns;

