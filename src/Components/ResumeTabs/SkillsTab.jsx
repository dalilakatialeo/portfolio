import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Tab.module.scss';

const SkillsTab = ({ experiences }) => {
  const skills = extractUniqueSkills(experiences);

  return (
    <Box className={styles.list}>
      {skills && skills.length > 0 ? (
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <Box key={index} className={styles.item}>
              {skill}
            </Box>
          ))}
        </ul>
      ) : (
        <Typography variant="body1" className={styles.noSkills}>
          No skills available.
        </Typography>
      )}
    </Box>
  );
};

export default SkillsTab;

// skills exist in experiences, so we need to extract them from the experiences array
const extractUniqueSkills = (experiences) => {
  const allSkills = experiences?.reduce((acc, experience) => {
    if (experience.skills && experience.skills.trim()) {
      // split skills by '·'
      const skillsArray = experience.skills
        .split('·')
        .map((skill) => skill.trim());
      return [...acc, ...skillsArray];
    }
    return acc;
  }, []);

  // remove duplicates, use a Set
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills;
};
