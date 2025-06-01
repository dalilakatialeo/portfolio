import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography variant="subtitle2" className={styles.footerText}>
        © {new Date().getFullYear()} DKL - brought to you by ones and zeros 🤖
      </Typography>
    </Box>
  );
};

export default Footer;
