import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Tab.module.scss';

const EducationTab = ({ educations }) => {
  return (
    <Box className={styles.list}>
      {educations?.map((education, index) => (
        <Box key={index} className={styles.item}>
          <Typography variant="h5" className={styles.company}>
            {education.degree}{' '}
            {education.field_of_study ? `- ${education.field_of_study}` : ''}
          </Typography>
          <Typography variant="subtitle2" className={styles.dateLocation}>
            {education.school}
            {education.date_range
              ? ` — ${extractYears(education.date_range)}`
              : ''}
          </Typography>
          <Typography variant="body1" className={styles.description}>
            {education.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default EducationTab;

const extractYears = (dateRange) => {
  // empty date range? skip it
  if (!dateRange) return '';
  // only keep the years if months are present
  const match = dateRange.match(/\d{4}/g);
  return match ? match.join(' - ') : '';
};
