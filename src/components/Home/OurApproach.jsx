import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../Shared/Section';
import AnimatedSection from '../Shared/AnimatedSection';

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
      <AnimatedSection>
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
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'white',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + 0.3,
                          type: 'spring',
                          stiffness: 200,
                        }}
                      >
                        <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                          {index + 1}.
                        </Typography>
                      </motion.div>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {principle.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        {principle.description}
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

export default OurApproach;

