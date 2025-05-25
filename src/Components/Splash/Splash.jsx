import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Splash.module.scss';

const Splash = ({ title, subtitle, progressSpeed = 25, onComplete }) => {
  const [progress, setProgress] = useState(0);

  const startProgress = useCallback(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, progressSpeed);

    return () => clearInterval(interval);
  }, [progressSpeed]);

  useEffect(() => {
    const cleanup = startProgress();
    return cleanup;
  }, [startProgress]);

  // Progress reached 100, call onComplete if provided
  useEffect(() => {
    if (progress === 100 && onComplete) {
      onComplete();
    }
  }, [progress, onComplete]);

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
