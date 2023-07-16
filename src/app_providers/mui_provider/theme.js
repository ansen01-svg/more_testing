import { createTheme } from "@mui/material";


const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '25px',
        fontWeight: '500'
      },
      h2: {
        fontSize: '20px',
        fontWeight: '500',
      },
      h3: {
        fontSize: '14px',
        fontWeight: '500',
      },
      h4: {
        fontSize: '12px',
        fontWeight: '500'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: '-apple-system';
            font-style: normal;
            font-display: swap;
            font-weight: 400;          
        }
        `,
      },
      MuiTypography: {
        styleOverrides: {
          
        }
      }
    },
  });


export default theme;