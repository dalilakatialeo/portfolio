import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './Projects.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import SearchBox from '../../Components/SearchBox/SearchBox';
import { languageColours } from '../../styles/languageColours';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const [repos, setRepos] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

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
    setFilteredRepos(sortedRepos || []); // Initialize filteredRepos with all repos
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
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        repos={repos}
        setFilteredRepos={setFilteredRepos}
      />
      <Box>
        {filteredRepos && filteredRepos.length > 0 ? (
          <Box className={styles.projectList}>
            {filteredRepos.map((repo, index) => (
              <Box key={index} className={styles.projectItem}>
                <Typography variant="h5" className={styles.projectTitle}>
                  {repo.name}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.projectDescription}
                >
                  {repo.description || ''}
                </Typography>
                <Box className={styles.projectLanguages}>
                  {repo.languages
                    ? repo.languages.split(', ').map((language, langIndex) => (
                        <Box
                          key={langIndex}
                          className={styles.languagePill}
                          // Inline style to set the background color based on the language
                          style={{
                            backgroundColor: `${languageColours[language]}80`, // 50% opacity (using hex suffix)
                          }}
                        >
                          {language}
                        </Box>
                      ))
                    : ''}
                </Box>
                <Box className={styles.projectLinks}>
                  <Button
                    variant="contained"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                    startIcon={<GitHubIcon />}
                  >
                    View on GitHub
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body2">
            Oops, nothing to see here! Check back later for my projects.
          </Typography>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Projects;
