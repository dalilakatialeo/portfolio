import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Tab.module.scss';
import NoResults from '../NoResults/NoResults';

const EmploymentTab = ({ employments }) => {
  return (
    <Box className={styles.list}>
      {employments && employments.length > 0 ? (
        employments?.map((employment, index) => (
          <Box key={index} className={styles.item}>
            <Typography variant="h5" className={styles.company}>
              {employment.title} @ {employment.company}
            </Typography>
            <Typography variant="subtitle2" className={styles.dateLocation}>
              {employment.date_range} — {employment.location}
            </Typography>
            <Typography variant="body1" className={styles.description}>
              {employment.description}
            </Typography>
          </Box>
        ))
      ) : (
        <NoResults data={'employment'} />
      )}
    </Box>
  );
};

export default EmploymentTab;
