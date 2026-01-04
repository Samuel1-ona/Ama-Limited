import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Partners', path: '/partners' },
  ];

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: isActive(item.path) ? 'primary.main' : 'transparent',
              color: isActive(item.path) ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: isActive(item.path) ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem sx={{ pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/#contact"
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: 'primary.main' }}
          >
            Request Demo
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            AMA Limited
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  borderBottom: isActive(item.path) ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              component={Link}
              to="/#contact"
              sx={{ ml: 2 }}
            >
              Request Demo
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

