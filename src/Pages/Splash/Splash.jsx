import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './Splash.module.scss';

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 25 milliseconds increments

    if (progress === 100) {
      navigate('/about');
    }

    return () => clearInterval(interval);
  }, [progress, navigate]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <Box className={styles.splashContainer}>
      <Box className={styles.contentOverlay}>
        <Typography
          variant="h2"
          className={styles.title}
          sx={{ typography: 'title' }}
        >
          Dalila Katia Leo
        </Typography>
        <Typography
          variant="h4"
          className={styles.subtitle}
          sx={{ typography: 'subtitle' }}
        >
          Full-Stack Engineer
        </Typography>
        <Box className={styles.progressContainer}>
          <Box
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </Box>
        <Typography className={styles.progressText}>{progress}%</Typography>
      </Box>
    </Box>
  );
};

export default Splash;
