import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', ...props }) => {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;

