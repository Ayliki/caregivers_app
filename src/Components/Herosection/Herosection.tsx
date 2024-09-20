import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography, Box } from '@mui/material';
import './HeroSection.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box className="hero-section">
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          {buttonText}
        </Button>
      </Box>
    </motion.div>
  );
};

export default HeroSection;