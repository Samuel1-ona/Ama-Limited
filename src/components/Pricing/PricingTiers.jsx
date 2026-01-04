import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import FactoryIcon from '@mui/icons-material/Factory';
import Section from '../Shared/Section';

const PricingTiers = () => {
  const tiers = [
    {
      icon: <HomeIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Home Plan',
      subtitle: 'For households and individual users',
      features: [
        'My GasTracker device',
        'Real-time gas monitoring',
        'Automated leak alerts',
        'Basic usage insights',
        'Mobile & web access',
      ],
      pricingModel: 'One-time device & installation fee\nOptional monthly or annual monitoring subscription',
      bestFor: 'Families and individuals who want peace of mind, early leak detection, and smarter gas usage.',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Business Plan',
      subtitle: 'For restaurants, SMEs, and small commercial users',
      features: [
        'Everything in Home Plan, plus:',
        'Advanced usage analytics',
        'Usage thresholds & alerts',
        'Operational reports',
        'Priority support',
      ],
      pricingModel: 'Device & installation per location\nMonthly or annual subscription per device or site',
      bestFor: 'Businesses that rely on gas daily and want to reduce downtime, waste, and safety risks.',
    },
    {
      icon: <FactoryIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Enterprise & Multi-Site Plan',
      subtitle: 'For chains, institutions, and large operators',
      features: [
        'Everything in Business Plan, plus:',
        'Multi-location dashboard',
        'Centralized monitoring',
        'Custom alert rules',
        'API & system integrations',
        'Dedicated support & onboarding',
      ],
      pricingModel: 'Custom pricing based on scale and requirements',
      bestFor: 'Organizations managing gas across multiple sites that need visibility, control, and reporting at scale.',
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Pricing Tiers
        </Typography>

        <Grid container spacing={4}>
          {tiers.map((tier, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {tier.icon}
                    <Typography variant="h4" component="h3" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                      {tier.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                      {tier.subtitle}
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    Includes:
                  </Typography>
                  <List dense>
                    {tier.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: 'text.secondary' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 3, mb: 3, p: 2, backgroundColor: 'background.paper', borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Pricing Model:
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
                      {tier.pricingModel}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Best for:
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {tier.bestFor}
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

export default PricingTiers;

