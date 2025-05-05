import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { RocketLaunch, Assessment, EmojiObjects } from "@mui/icons-material";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <RocketLaunch fontSize="large" />,
    title: "Fast Matching",
    description:
      "Instantly match resumes with job descriptions using state-of-the-art AI algorithms including BERT & cosine similarity.",
  },
  {
    icon: <Assessment fontSize="large" />,
    title: "Detailed Analysis",
    description:
      "Get a breakdown of skills, strengths, and missing qualifications tailored to your target job.",
  },
  {
    icon: <EmojiObjects fontSize="large" />,
    title: "Smart Suggestions",
    description:
      "Receive recommendations on how to improve your resume for higher compatibility scores.",
  },
];

export default function LearnMore() {
  return (
    <Layout>
      <Container sx={{ py: 10 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#1976d2", mb: 2, textAlign: "center" }}
          >
            Why Choose Resume Expert?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#555",
              fontSize: "1.2rem",
              mb: 5,
            }}
          >
            We combine AI with modern job market insights to give you a competitive edge.
            Whether you're a fresher or a seasoned professional, our platform helps you
            land your dream job.
          </Typography>
        </motion.div>

        {/* Feature Grid */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2, color: "#1976d2" }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Link to="/file">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "12px 30px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#004aad",
                  transform: "scale(1.05)",
                },
              }}
            >
              Upload Resume Now
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
