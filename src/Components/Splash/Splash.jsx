import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './Splash.module.scss';
import { fetchLinkedInProfile } from '../../utils/fetchLinkedin';

const Splash = ({ title, subtitle }) => {
  const [progress, setProgress] = useState(0);
  const [setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLinkedInData(setError, setProgress);
  }, [setError]);

  useEffect(() => {
    handleProgressCompletion(progress, navigate);
  }, [progress, navigate]);

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

const handleProgressCompletion = (progress, navigate) => {
  if (progress === 100) {
    navigate('/about');
  }
};
