import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Home.module.scss';
import NavBar from '../../Components/NavBar/NavBar';

const Home = () => {
  return (
    <Box className={styles.homeContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        Home
      </Typography>
      <Typography variant="body1" className={styles.description}>
        This is the home page
      </Typography>
    </Box>
  );
};

export default Home;
