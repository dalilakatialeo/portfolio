import React from 'react';
import { Box, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import navLinks from './navLinks';

const DesktopNav = () => {
  // Render the desktop navigation menu - iterating over navLinks
  return (
    <Box className={styles.desktopNav}>
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          // apply 'active' style if the link is active
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          <Typography variant="button" sx={{ typography: 'link' }}>
            {link.label}
          </Typography>
        </NavLink>
      ))}
      <Box className={styles.iconLinks}>
        <a
          href="https://www.linkedin.com/in/dalila-k-leo/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/dalilakatialeo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <GitHub />
        </a>
        <a href="mailto:dalilakatialeo@gmail.com" className={styles.iconLink}>
          <Email />
        </a>
      </Box>
    </Box>
  );
};

export default DesktopNav;
