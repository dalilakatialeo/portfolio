import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    title: {
      fontFamily:
        "'Fascinate', 'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    subtitle: {
      fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 200,
    },
  },
});

export default theme;
