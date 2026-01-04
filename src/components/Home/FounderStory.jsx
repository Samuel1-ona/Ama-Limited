import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Section from '../Shared/Section';

const FounderStory = () => {
  const values = [
    {
      title: 'Safety should be proactive, not reactive',
      description: "People shouldn't have to wait for accidents or losses to know something is wrong.",
    },
    {
      title: 'Technology must work in real environments',
      description: 'Solutions must be reliable, easy to install, and usable by everyday people—not just engineers.',
    },
    {
      title: 'Data creates long-term value',
      description: 'When usage and safety data are visible, better decisions follow—for households, businesses, and eventually entire supply chains.',
    },
  ];

  return (
    <Section backgroundColor="background.paper">
      <Box>
        <Typography variant="h2" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          The Story Behind AMA Limited
        </Typography>
        <Typography variant="h5" component="h3" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
          Founded With Purpose
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          AMA Limited was founded on a simple realization: gas safety and efficiency are often treated as afterthoughts, despite the central role gas plays in everyday life.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          Across homes, restaurants, and small businesses, cooking gas is used daily—yet most users have little visibility into how much they consume, when refills are truly needed, or whether a leak or abnormal usage is developing. Too often, problems are only discovered after something goes wrong.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 600 }}>
          The founders of AMA Limited saw this gap clearly.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          They recognised that while technology had transformed sectors like finance, mobility, and communications, gas usage remained largely invisible and unmanaged, especially in African markets where LPG is widely used but safety infrastructure is limited.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 600 }}>
          Rather than building a generic "smart device," the team set out to create something practical:
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
            • A system that could detect risks early
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
            • A platform that could turn gas usage into understandable data
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
            • A solution designed for real conditions, not ideal ones
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
          This thinking led to the creation of My GasTracker—AMA Limited's first product and the foundation of a broader vision for smarter gas management.
        </Typography>

        <Typography variant="h4" component="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
          Values-Driven Motivation
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          From the beginning, the company has been guided by three beliefs:
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', backgroundColor: 'white' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
          The Long-Term View
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
          AMA Limited is building for the long term.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
          While My GasTracker starts with households and businesses, the broader goal is to create a scalable gas safety and monitoring platform that can support partners, distributors, and institutions as gas usage continues to grow across Africa.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
          The founders believe that safer, more efficient gas usage is not only possible—it is necessary for sustainable energy transitions and economic growth.
        </Typography>

        <Box
          sx={{
            textAlign: 'center',
            py: 4,
            px: 3,
            backgroundColor: 'white',
            borderRadius: 2,
            borderLeft: '4px solid',
            borderColor: 'primary.main',
          }}
        >
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic' }}>
            AMA Limited was not founded to sell devices alone.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic' }}>
            It was founded to make gas safer, usage smarter, and decisions better informed—one deployment at a time.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6, py: 4, borderTop: '2px solid', borderColor: 'divider' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              fontStyle: 'italic',
              mb: 1,
              color: 'text.secondary',
            }}
          >
            "We believe safety and efficiency should be built into everyday energy use—not added after problems occur."
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
            — The Founders, AMA Limited
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default FounderStory;

