import React from 'react';
import ResumeUpload from '../Component/FileUpload';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import Layout from '../Layout/Layout';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FileUploadPage() {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate('/');
  };

  return (
    <Layout>
      {/* Slide-in animation from the top */}
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Starts above the screen
        animate={{ opacity: 1, y: 0 }} // Ends at normal position
        transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
      >
        <Container
          maxWidth="md"
          sx={{
            py: 5,
            mt: 4,
            backgroundColor: '#f0f2f5',
            borderRadius: 4,
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  background: 'linear-gradient(90deg, #1e88e5, #42a5f5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  fontSize: { xs: '2.4rem', md: '3rem' },
                }}
              >
                Resume Analyzer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Typography variant="subtitle1" color="textSecondary">
                Upload your resume and match it with your dream job.
              </Typography>
            </motion.div>
          </Box>

          {/* Resume Upload Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ marginBottom: '2.5rem' }}
          >
            <Box
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, #ffffff, #f0f4f8)',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    color: '#1e88e5',
                  }}
                >
                  📄 Upload Resume
                </Typography>
              </motion.div>
              <ResumeUpload />
            </Box>
          </motion.div>

          {/* Job Description Input Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Box
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, #ffffff, #f0f4f8)',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {/* Decorative Glow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  backgroundColor: '#42a5f5',
                  borderRadius: '50%',
                  filter: 'blur(80px)',
                  opacity: 0.3,
                  zIndex: 0,
                }}
              />

              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 'bold', color: '#1e88e5', zIndex: 1, position: 'relative' }}
              >
                📋 Enter Job Description
              </Typography>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TextField
                  placeholder="Paste or type the job description here..."
                  multiline
                  rows={8}
                  fullWidth
                  variant="outlined"
                  sx={{
                    mb: 3,
                    zIndex: 1,
                    position: 'relative',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAnalyzeClick}
                  sx={{
                    background: 'linear-gradient(90deg, #1e88e5, #42a5f5)',
                    color: '#fff',
                    borderRadius: '10px',
                    px: 4,
                    py: 1.2,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: '0 6px 16px rgba(66, 165, 245, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #1565c0, #1e88e5)',
                      boxShadow: '0 8px 20px rgba(66, 165, 245, 0.5)',
                    },
                  }}
                >
                  Analyze 🚀
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </motion.div>
    </Layout>
  );
}



