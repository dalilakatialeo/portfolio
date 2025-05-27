import React, { useEffect, useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import styles from './Resume.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import ExperienceTab from '../../Components/ResumeTabs/ExperienceTab';
import EducationTab from '../../Components/ResumeTabs/EducationTab';
import SkillsTab from '../../Components/ResumeTabs/SkillsTab';

const Resume = () => {
  const [experiences, setExperiences] = useState(null);
  const [educations, setEducation] = useState(null);
  // const [skills, setSkills] = useState(null);
  const [error] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // 0: Experiences, 1: Education, 2: Skills

  useEffect(() => {
    const cachedData = localStorage.getItem('linkedin-cache');
    const parsedData = JSON.parse(cachedData)?.data || {};
    setExperiences(parsedData.experiences || []);
    setEducation(parsedData.educations || []);
    // setSkills(parsedData.skills || []);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className={styles.resumeContainer}>
      <NavBar />
      <Typography variant="h2" className={styles.title}>
        Resume
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        className={styles.tabs}
        // inline styles for tabs - doesnt work otherwise!
        // TODO: try and move this to a stylesheet!
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
          '.MuiTab-root': {
            color: '#000211',
            textTransform: 'uppercase',
            backgroundColor: '#fafafa',
            borderRadius: '16px',
            padding: '2px 6px',
            margin: '10px 6px',
            fontSize: '0.7rem',
            fontWeight: 400,
            minHeight: '40px',

            '&.Mui-selected': {
              backgroundColor: '#b7e9bf',
              color: '#000211',
            },
          },
        }}
      >
        <Tab label="Experiences" />
        <Tab label="Education" />
        <Tab label="Skills" />
      </Tabs>

      {error ? (
        <Typography variant="body1" className={styles.error}>
          {error}
        </Typography>
      ) : (
        <Box className={styles.tabContent}>
          {activeTab === 0 && <ExperienceTab experiences={experiences} />}
          {activeTab === 1 && <EducationTab educations={educations} />}
          {activeTab === 2 && <SkillsTab experiences={experiences} />}
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default Resume;
