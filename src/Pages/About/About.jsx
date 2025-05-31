import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './About.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

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
        <Box>
          <img
            src="/images/avatar-uhoh.png"
            alt="Avatar"
            className={styles.avatar}
          />
          <Typography variant="body1" className={styles.noAbout}>
            <h3>Uh oh!</h3>
            <p>I could not retrieve any information.</p>
            <p>Have you tried turning me off and on again..? 😅 </p>
          </Typography>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default About;
