import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomAppBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        height: '80px',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
            >
              Resume Expert
            </Typography>
          </motion.div>
        </Box>

        {/* Right Section: Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link to="/contact-us" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

