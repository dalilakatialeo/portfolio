import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Resume.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const CACHE_KEY = 'linkedInWorkExperiencesCache';
const CACHE_EXPIRATION_KEY = 'linkedInWorkExperiencesCacheExpiration';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in millisecond

const Resume = () => {
  const [linkedInWorkExperiences, setLinkedWorkExperiences] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if cached data exists and is still valid
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cacheExpiration = localStorage.getItem(CACHE_EXPIRATION_KEY);

        if (
          cachedData &&
          cacheExpiration &&
          Date.now() < parseInt(cacheExpiration, 10)
        ) {
          console.log('Using cached data');
          setLinkedWorkExperiences(JSON.parse(cachedData));
          return;
        }

        // Fetch new data from the API
        const data = await fetchLinkedInProfile();

        // Log full response to inspect structure
        console.log('Fetched data:', data);

        // Try to grab the experiences from possible nesting
        const experiences = data?.experiences || data?.data?.experiences;

        if (!experiences) {
          throw new Error('No experiences found in response');
        }

        // Cache the data and set expiration
        localStorage.setItem(CACHE_KEY, JSON.stringify(experiences));
        localStorage.setItem(
          CACHE_EXPIRATION_KEY,
          (Date.now() + CACHE_DURATION).toString(),
        );

        setLinkedWorkExperiences(experiences);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load LinkedIn profile data');
      }
    };

    fetchData();
  }, []);

  return (
    <Box className={styles.resumeContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        Resume
      </Typography>

      {error ? (
        <Typography variant="body1" className={styles.error}>
          {error}
        </Typography>
      ) : linkedInWorkExperiences ? (
        <Box className={styles.experienceList}>
          {linkedInWorkExperiences.map((experience, index) => (
            <Box key={index} className={styles.experienceItem}>
              <Typography variant="h5" className={styles.company}>
                {experience.title} @ {experience.company}
              </Typography>
              <Typography variant="subtitle1" className={styles.dateLocation}>
                {experience.date_range} — {experience.location}
              </Typography>
              <Typography variant="body2" className={styles.description}>
                {experience.description}
              </Typography>
              {/* {experience.skills && (
                <Typography variant="caption" className={styles.skills}>
                  <strong>Skills:</strong> {experience.skills}
                </Typography> */}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body1" className={styles.description}>
          Loading LinkedIn profile data...
        </Typography>
      )}
      <Footer />
    </Box>
  );
};

export default Resume;

// Move this below export if you prefer separating logic
const fetchLinkedInProfile = async () => {
  const url = process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_URL;
  const apiKey = process.env.REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_API_KEY;

  console.log('API URL:', url);
  console.log('API KEY present:', Boolean(apiKey));

  if (!url || !apiKey) {
    throw new Error(
      'Missing REACT_APP_FRESH_LINKEDIN_PROFILE_DATA_URL or API key',
    );
  }

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  console.log('Response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Fetch failed response text:', errorText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
