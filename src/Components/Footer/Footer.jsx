import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography variant="subtitle2" className={styles.footerText}>
        © {new Date().getFullYear()} DKL - Made with 💚 and ☕️
      </Typography>
    </Box>
  );
};

export default Footer;
