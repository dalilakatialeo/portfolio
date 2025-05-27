import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './About.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  const [about, setAbout] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('linkedin-cache');
    const aboutData = JSON.parse(cachedData)?.data?.about;
    setAbout(aboutData);
  }, []);

  return (
    <Box className={styles.aboutContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        About Me
      </Typography>

      {error ? (
        <Typography variant="body1" className={styles.error}>
          {error}
        </Typography>
      ) : about ? (
        // split on new line so we render separate paragraphs
        <Typography variant="body1" className={styles.description}>
          {about.split('\n').map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {index < about.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
      ) : (
        <Typography variant="body1" className={styles.description}>
          Loading about data...
        </Typography>
      )}
      <Footer />
    </Box>
  );
};

export default About;
