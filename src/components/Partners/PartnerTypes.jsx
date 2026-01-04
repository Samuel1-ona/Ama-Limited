import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import Section from '../Shared/Section';

const PartnerTypes = () => {
  const partnerTypes = [
    {
      icon: <BuildIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Installers & Technicians',
      who: 'Gas installers, technicians, and service providers.',
      benefits: [
        'Certified installation opportunities',
        'Training and technical support',
        'New revenue streams beyond installation',
        'Ongoing service and maintenance contracts',
      ],
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Gas Distributors & Suppliers',
      who: 'LPG distributors, retailers, and gas supply companies.',
      benefits: [
        'Bundle My GasTracker with gas supply packages',
        'Improve customer safety and satisfaction',
        'Reduce emergency incidents and complaints',
        'Gain usage insights to improve supply planning',
      ],
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Corporate & Institutional Partners',
      who: 'Property managers, facility operators, restaurant chains, institutions.',
      benefits: [
        'Centralized gas monitoring across locations',
        'Improved compliance and reporting',
        'Reduced downtime and operational losses',
      ],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Insurance & Risk Partners',
      who: 'Insurance providers and risk management firms.',
      benefits: [
        'Reduced claims through early detection',
        'Data-backed risk assessment',
        'New product bundles and pricing models',
      ],
      isFuture: true,
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Partner Types
        </Typography>

        <Grid container spacing={4}>
          {partnerTypes.map((partner, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                }}
              >
                {partner.isFuture && (
                  <Chip
                    label="Future Integration"
                    color="secondary"
                    size="small"
                    sx={{ position: 'absolute', top: 16, right: 16 }}
                  />
                )}
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {partner.icon}
                    <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                      {partner.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                      <strong>Who it's for:</strong> {partner.who}
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    Benefits:
                  </Typography>
                  <List dense>
                    {partner.benefits.map((benefit, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={benefit}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: 'text.secondary' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Section>
  );
};

export default PartnerTypes;

