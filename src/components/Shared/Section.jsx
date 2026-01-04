import React from 'react';
import { Box, Container } from '@mui/material';

const Section = ({ children, backgroundColor = 'background.default', py = 8, id }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor,
        py,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Section;

