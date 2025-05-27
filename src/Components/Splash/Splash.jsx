import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Splash.module.scss';
import { fetchLinkedInProfile } from '../../utils/fetchLinkedin';

const fetchLinkedInData = async (setError, setProgress) => {
  try {
    // time the fecth call
    const startTime = Date.now();
    fetchLinkedInProfile();
    const elapsedTime = Date.now() - startTime;

    // progress bar shows for at least 2 seconds
    const remainingTime = Math.max(2000 - elapsedTime, 0);

    setTimeout(() => {
      setProgress(100);
    }, remainingTime);
  } catch (err) {
    console.error('Error fetching LinkedIn profile:', err);
    setError('Failed to fetch LinkedIn profile data.');
    setProgress(100);
  }
};

// progress bar
const startProgressBar = (setProgress) => {
  const interval = setInterval(() => {
    setProgress((prev) => Math.min(prev + 5, 100));
  }, 200);

  return () => clearInterval(interval);
};

// Function to handle progress completion
const handleProgressCompletion = (progress, onComplete) => {
  if (progress === 100 && onComplete) {
    onComplete();
  }
};

const Splash = ({ title, subtitle, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLinkedInData(setError, setProgress);
  }, []);

  useEffect(() => {
    handleProgressCompletion(progress, onComplete);
  }, [progress, onComplete]);

  useEffect(() => {
    const cleanup = startProgressBar(setProgress);
    return cleanup;
  }, []);

  return (
    <Box className={styles.splashContainer}>
      <Box className={styles.contentOverlay}>
        <Typography
          variant="h2"
          className={styles.title}
          sx={{ typography: 'title' }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          className={styles.subtitle}
          sx={{ typography: 'subtitle' }}
        >
          {subtitle}
        </Typography>

        {progress < 100 && ( // Show progress bar only if not complete
          <Box className={styles.progressContainer}>
            <Box
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Splash;
