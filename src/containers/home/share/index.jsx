import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

const HomeShare = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,288L48,288C96,288,192,288,288,266.7C384,245,480,203,576,202.7C672,203,768,245,864,240C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className={classes.textContainer}>
          <Typography className={classes.textSmall} variant="subtitle2">
            Let your friend knows
          </Typography>
          <Typography className={classes.textBig} variant="h2">
            Share to your friends.
          </Typography>
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="default">
            Share
          </Button>
        </div>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    padding: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    position: 'relative',
    '& svg': {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  },
  textContainer: {
    position: 'relative',
  },
  textSmall: {
    textTransform: 'uppercase',
  },
  textBig: {
    fontSize: 20,
    marginTop: theme.spacing(0.4),
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
      marginTop: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default HomeShare;
