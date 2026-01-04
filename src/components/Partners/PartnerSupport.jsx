import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Section from '../Shared/Section';

const PartnerSupport = () => {
  const supportItems = [
    'Partner onboarding and training',
    'Installation guidelines and certification',
    'Access to partner dashboards',
    'Sales and marketing support',
    'Dedicated partner success contact',
  ];

  return (
    <Section>
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          How We Support Our Partners
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SupportAgentIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
        </Box>
        <Grid container spacing={3} sx={{ maxWidth: '900px', mx: 'auto' }}>
          {supportItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        mr: 2,
                        mt: 1,
                      }}
                    />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      {item}
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

export default PartnerSupport;

