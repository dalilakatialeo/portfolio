import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Projects.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { SpaceBar } from '@mui/icons-material';

const Projects = () => {
  const [repos, setRepos] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [languages, setLanguages] = React.useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('github-cache');
    const parsedData = JSON.parse(cachedData) || [];

    // Sort repositories by most recent activity first
    const sortedRepos = parsedData.sort((a, b) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB - dateA;
    });

    setRepos(sortedRepos || []);
  }, []);

  useEffect(() => {
    document.title = "Projects - Dalila Katia Leo's Portfolio";
  }, []);

  return (
    <Box className={styles.projectsContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        Projects
      </Typography>
      <Box>
        {repos && repos.length > 0 ? (
          <Box className={styles.projectList}>
            {repos.map((repo, index) => (
              <Box key={index} className={styles.projectItem}>
                <Typography variant="h5" className={styles.projectTitle}>
                  {repo.name}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.projectDescription}
                >
                  {repo.description || 'No description available.'}
                </Typography>
                <Typography className={styles.projectLanguages}>
                  {repo.languages || ''}
                </Typography>
                <Box className={styles.projectLinks}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" className={styles.noProjects}>
            No projects available.
          </Typography>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Projects;
