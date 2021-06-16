import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      a: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
      },
      '.MuiListItemText-primary': {
        fontSize: '0.97rem',
      },
      html: {
        '-ms-text-size-adjust': '100%',
        '-webkit-text-size-adjust': '100%',
        '-webkit-tap-highlight-color': 'transparent',
      },
      '.MuiSvgIcon-root': {
        fontSize: '1.2rem',
      },
      '::-webkit-scrollbar': {
        width: 7,
        height: 6,
        backgroundColor: theme.palette.background.paper,
      },
      '::-webkit-scrollbar-track': {
        borderRadius: 3,
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: 4,
        backgroundColor: theme.palette.primary.main,
      },
      '@keyframes pulseAnimation': {
        '0%': {
          opacity: 0,
          transform: 'scale(0)',
        },
        '1%': {
          opacity: 0.8,
        },
        '15%': {
          opacity: 0.4,
        },
        '75%': {
          opacity: 0,
          scale: 1,
        },
      },
    },
  }),
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
