import { Box, Typography } from '@mui/material';
import styles from './NoResults.module.scss';

const NoResults = ({ data }) => {
  return (
    <Box>
      <img
        src="/images/avatar-uhoh.png"
        alt="Avatar"
        className={styles.avatar}
      />
      <Typography variant="body1" className={styles.noData}>
        <h3>Uh oh!</h3>
        <p>I could not retrieve any {data} information.</p>
        <p>Have you tried turning me off and on again..? 😅 </p>
      </Typography>
    </Box>
  );
};

export default NoResults;
