import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B1F33', // Deep Navy Blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4A5D73', // Slate Gray
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2ECC71', // Safety Green
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#EAF2F8', // Soft Blue for cards/sections
    },
    text: {
      primary: '#0B1F33', // Navy for headings
      secondary: '#4A5D73', // Slate Gray for body
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#0B1F33',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      color: '#0B1F33',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      color: '#0B1F33',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#0B1F33',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      color: '#0B1F33',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#0B1F33',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#4A5D73',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#4A5D73',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          borderRadius: '8px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(11, 31, 51, 0.15)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(11, 31, 51, 0.25)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(11, 31, 51, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(11, 31, 51, 0.15)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          scrollBehavior: 'smooth',
        },
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

export default theme;

