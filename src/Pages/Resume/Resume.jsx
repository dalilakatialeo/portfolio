import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Resume.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Resume = () => {
  const [experiences, setExperiences] = useState(null);
  const [error] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('linkedin-cache');
    const experiences = JSON.parse(cachedData)?.data?.experiences || [];
    setExperiences(experiences);
  }, []);

  return (
    <Box className={styles.resumeContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        Resume
      </Typography>

      {error ? (
        <Typography variant="body1" className={styles.error}>
          {error}
        </Typography>
      ) : experiences ? (
        <Box className={styles.experienceList}>
          {experiences.map((experience, index) => (
            <Box key={index} className={styles.experienceItem}>
              <Typography variant="h5" className={styles.company}>
                {experience.title} @ {experience.company}
              </Typography>
              <Typography variant="subtitle1" className={styles.dateLocation}>
                {experience.date_range} — {experience.location}
              </Typography>
              <Typography variant="body2" className={styles.description}>
                {experience.description}
              </Typography>
              {/* {experience.skills && (
                <Typography variant="caption" className={styles.skills}>
                  <strong>Skills:</strong> {experience.skills}
                </Typography> */}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" className={styles.description}>
          Loading Resume data...
        </Typography>
      )}
      <Footer />
    </Box>
  );
};

export default Resume;
