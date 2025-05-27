import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Tab.module.scss';

const ExperienceTab = ({ experiences }) => {
  return (
    <Box className={styles.list}>
      {experiences?.map((experience, index) => (
        <Box key={index} className={styles.item}>
          <Typography variant="h5" className={styles.company}>
            {experience.title} @ {experience.company}
          </Typography>
          <Typography variant="subtitle2" className={styles.dateLocation}>
            {experience.date_range} — {experience.location}
          </Typography>
          <Typography variant="body2" className={styles.description}>
            {experience.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceTab;
