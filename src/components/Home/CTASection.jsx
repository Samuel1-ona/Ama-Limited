import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../Shared/Section';

const CTASection = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Section backgroundColor="primary.main" py={10} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, color: 'white' }}>
            Let's Build Safer Gas Systems Together
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.95, maxWidth: '700px', mx: 'auto' }}>
            Whether you're a household, business, distributor, or investor, we welcome collaboration in building safer and smarter gas solutions.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={buttonVariants}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  },
                }}
                href="mailto:amalimiteed@gmail.com?subject=Request a Demo"
              >
                Request a Demo
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
                href="/partners"
              >
                Partner With Us
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
                href="mailto:amalimiteed@gmail.com?subject=Investor Enquiry"
              >
                Investor Enquiries
              </Button>
            </motion.div>
          </Stack>
        </Box>
      </motion.div>
    </Section>
  );
};

export default CTASection;

