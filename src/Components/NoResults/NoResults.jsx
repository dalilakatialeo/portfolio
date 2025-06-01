import { Box, Typography } from '@mui/material';
import styles from './NoResults.module.scss';

const NoResults = ({ data = '', is404 = false }) => {
  // Default to an empty string if no data prop is not provided
  return (
    <Box>
      <img
        src={`${process.env.PUBLIC_URL}/images/avatar-uhoh.png`}
        alt="Avatar"
        className={styles.avatar}
      />
      {is404 ? (
        <Typography variant="body1" className={styles.noData} component={'div'}>
          <h3>404 - Page not found</h3>
          <p>Are you lost?</p>
        </Typography>
      ) : (
        <Typography variant="body1" className={styles.noData} component={'div'}>
          <h3>Uh oh!</h3>
          <p>I could not retrieve any {data} information.</p>
          <p>Have you tried turning me off and on again..? 😅 </p>
        </Typography>
      )}
    </Box>
  );
};

export default NoResults;
