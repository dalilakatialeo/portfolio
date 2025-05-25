import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
    title: {
      fontFamily: "'Fascinate', 'Inter', 'Helvetica', 'Arial', sans-serif",
    },
    subtitle: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 200,
    },
    link: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 300,
    },
  },
});

export default theme;
