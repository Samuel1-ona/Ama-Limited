import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import NatureIcon from '@mui/icons-material/Nature';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Section from '../Shared/Section';
import AnimatedSection from '../Shared/AnimatedSection';

const WhyItMatters = () => {
  const impacts = [
    {
      icon: <SecurityIcon sx={{ fontSize: 48, color: 'success.main' }} />,
      title: 'Improve everyday safety',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 48, color: 'success.main' }} />,
      title: 'Reduce unnecessary gas waste',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48, color: 'success.main' }} />,
      title: 'Support smarter energy use',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48, color: 'success.main' }} />,
      title: 'Build trust across the gas value chain',
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <AnimatedSection>
        <Box>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Why It Matters
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
            Gas-related accidents, inefficiencies, and waste have real human and economic costs. Families, workers, and businesses deserve better tools to manage these risks.
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center', fontWeight: 600 }}>
            By making gas usage visible, measurable, and actionable, AMA Limited is helping to:
          </Typography>

          <Grid container spacing={4}>
            {impacts.map((impact, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Box sx={{ mb: 2 }}>{impact.icon}</Box>
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {impact.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </AnimatedSection>
    </Section>
  );
};

export default WhyItMatters;

