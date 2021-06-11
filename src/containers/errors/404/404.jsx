import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NotMatchContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h1">
        404
      </Typography>
      <Button
        disableElevation
        color="primary"
        component={RouterLink}
        variant="contained"
        to="/"
      >
        Back to home
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default NotMatchContainer;
