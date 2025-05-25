import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const DesktopNav = () => {
  return (
    <Box className={styles.desktopNav}>
      <Link to="/" className={styles.navLink}>
        <Typography variant="button" sx={{ typography: 'link' }}>
          Home
        </Typography>
      </Link>
      <Link to="/about" className={styles.navLink}>
        <Typography variant="button" sx={{ typography: 'link' }}>
          About
        </Typography>
      </Link>
      <Link to="/portfolio" className={styles.navLink}>
        <Typography variant="button" sx={{ typography: 'link' }}>
          Projects
        </Typography>
      </Link>
      <Link to="/contact" className={styles.navLink}>
        <Typography variant="button" sx={{ typography: 'link' }}>
          Contact
        </Typography>
      </Link>
    </Box>
  );
};

export default DesktopNav;
