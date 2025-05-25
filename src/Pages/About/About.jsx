import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './About.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <Box className={styles.aboutContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        About Me
      </Typography>
      <Typography variant="body1" className={styles.description}>
        Hello! I'm Dalila Katia Leo, a passionate Full-Stack Engineer with a
        love for creating dynamic and user-friendly web and mobile applications.
        I specialize in modern web technologies and enjoy solving complex
        problems with elegant solutions.
      </Typography>
      <Typography variant="body1" className={styles.description}>
        In my free time, I enjoy exploring new technologies, contributing to
        open-source projects, and learning about the latest trends in software
        development.
      </Typography>
      <Footer />
    </Box>
  );
};

export default About;
