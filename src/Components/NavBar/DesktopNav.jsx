import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import navLinks from './navLinks';

const DesktopNav = () => {
  // Render the desktop navigation menu - iterating over navLinks
  return (
    <Box className={styles.desktopNav}>
      {navLinks.map((link, index) => (
        <Link key={index} to={link.path} className={styles.navLink}>
          <Typography variant="button" sx={{ typography: 'link' }}>
            {link.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default DesktopNav;
