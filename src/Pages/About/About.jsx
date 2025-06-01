import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './About.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import NoResults from '../../Components/NoResults/NoResults';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('linkedin-cache');
    const aboutData = JSON.parse(cachedData)?.data?.about;
    setAbout(aboutData);
  }, []);

  useEffect(() => {
    document.title = "About - Dalila Katia Leo's Portfolio";
  }, []);

  return (
    <Box className={styles.aboutContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        About Me
      </Typography>

      {about ? (
        // split on new line so we render separate paragraphs
        <Typography variant="body1" className={styles.description}>
          {about.split('\n').map((paragraph, index) => (
            <Box key={index}>
              {paragraph}
              {index < about.split('\n').length - 1 && <br />}
            </Box>
          ))}
        </Typography>
      ) : (
        <NoResults />
      )}
      <Footer />
    </Box>
  );
};

export default About;
