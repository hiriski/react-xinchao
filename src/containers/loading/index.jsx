import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Logo from 'src/components/logo';

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Logo logoStyle={classes.logoImg} />
      </div>

      <div className={classes.progressBar}>
        <CircularProgress size={24} />
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.text} variant="subtitle2">
          Speak Vietnamese with confidence
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: theme.zIndex.tooltip,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    height: 54,
    width: 'auto',
  },
  progressBar: {
    marginBottom: theme.spacing(2),
  },
  text: {
    color: '#606060',
  },
}));

export default Loading;
