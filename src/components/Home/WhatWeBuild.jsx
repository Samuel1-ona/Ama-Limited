import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Section from '../Shared/Section';
import AnimatedSection from '../Shared/AnimatedSection';

const WhatWeBuild = () => {
  const features = [
    'Detect potential gas leaks early',
    'Provide real-time visibility into gas usage',
    'Send automated alerts when risks or abnormal patterns are detected',
    'Help users plan refills and reduce waste',
    'Support safer, more efficient gas use',
  ];

  return (
    <Section>
      <AnimatedSection>
        <Box>
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            What We Build
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}
          >
            Our first product, My GasTracker, is an IoT-enabled gas monitoring and safety platform designed to:
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'background.paper',
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.2,
                            type: 'spring',
                            stiffness: 200,
                          }}
                        >
                          <CheckCircleIcon sx={{ color: 'success.main', mr: 2, mt: 0.5 }} />
                        </motion.div>
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                          {feature}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
            My GasTracker is built to scale—from individual households to restaurants, SMEs, and multi-site operators, and eventually to broader gas distribution and management use cases.
          </Typography>
        </Box>
      </AnimatedSection>
    </Section>
  );
};

export default WhatWeBuild;

