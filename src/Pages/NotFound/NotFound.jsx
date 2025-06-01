import React from 'react';
import { Box, Typography } from '@mui/material';
import NoResults from '../../Components/NoResults/NoResults';
import NavBar from '../../Components/NavBar/NavBar';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <Box className={styles.notFoundContainer}>
      <NavBar />
      <Box>
        <NoResults is404={true} />
      </Box>
    </Box>
  );
};

export default NotFound;
