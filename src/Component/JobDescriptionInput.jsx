import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button, Paper, CircularProgress, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ResumeSearch() {
  const [jobDescription, setJobDescription] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [buttonClickedOnce, setButtonClickedOnce] = useState(false); // Track if the button was clicked once
  const [navigateToHome, setNavigateToHome] = useState(false); // Flag for navigation
  const navigate = useNavigate();

  useEffect(() => {
    // If the flag is set and the search is completed, navigate to home after showing the snackbar
    if (navigateToHome && !isSearching) {
      setNavigateToHome(false); // Reset the flag after navigation
      navigate('/'); // Navigate to home page
    }
  }, [navigateToHome, isSearching, navigate]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobDescription(event.target.value);
  };

  const handleSearchClick = () => {
    if (jobDescription.trim() === '') {
      setSearchError(true);
      return;
    }

    // Start the search process
    setIsSearching(true);
    setSearchError(false);

    // After the first click, show the message
    if (!buttonClickedOnce) {
      setButtonClickedOnce(true);
      setTimeout(() => {
        setIsSearching(false);
        setOpenSnackbar(true); // Show message after the search
      }, 2000); // Simulate a delay for searching
    } else {
      // If clicked again, show message and navigate after a brief delay
      setTimeout(() => {
        setIsSearching(false);
        setOpenSnackbar(true); // Show the message
        setNavigateToHome(true); // Mark to navigate after the message
      }, 2000); // Simulated delay for showing the message
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Grid item xs={12} md={8}>
        {/* Wrapping the search box with Paper for styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Paper elevation={5} sx={{ padding: 4, borderRadius: '20px', background: 'linear-gradient(135deg, #ffffff, #e3f2fd)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', textAlign: 'center', color: '#1e88e5' }}
            >
              Search for Resumes
            </Typography>

            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ textAlign: 'center', marginBottom: 3 }}
            >
              Enter the job description below to find matching resumes.
            </Typography>

            {/* Search Box with Motion Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <TextField
                fullWidth
                label="Job Description"
                variant="outlined"
                multiline
                rows={6}
                value={jobDescription}
                onChange={handleSearchChange}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e88e5',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e88e5',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
            </motion.div>

            {/* Search Button with Animations */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearchClick}
                sx={{
                  background: 'linear-gradient(90deg, #1e88e5, #42a5f5)',
                  color: '#fff',
                  borderRadius: '12px',
                  padding: '0.8rem 2rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(66, 165, 245, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1565c0, #1e88e5)',
                    boxShadow: '0 6px 16px rgba(66, 165, 245, 0.5)',
                  },
                }}
              >
                {isSearching ? (
                  <CircularProgress size={24} sx={{ color: 'white' }} />
                ) : (
                  'Search Resumes'
                )}
              </Button>
            </motion.div>

            {/* Error Snackbar */}
            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={() => setOpenSnackbar(false)}
            >
              <Alert severity={searchError ? 'error' : 'success'} sx={{ width: '100%' }}>
                {searchError ? 'Please enter a job description.' : 'Resumes found!'}
              </Alert>
            </Snackbar>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default ResumeSearch;

