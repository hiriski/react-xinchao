import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from 'src/config';

const ActionNeedToAuthenticate = ({ title, message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Box mb={3}>
          <Typography variant="subtitle1" className={classes.title}>
            {title ? title : 'Sign in required'}
          </Typography>
          <Typography className={classes.message}>{message}</Typography>
        </Box>
        <Button
          variant="contained"
          disableElevation
          component={RouterLink}
          to={ROUTES.SIGNIN}
          color="primary"
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0,
    flex: 1,
    width: '100%',
    zIndex: 2,
    [theme.breakpoints.up('lg')]: {
      left: theme.custom.sidebarWidth,
      width: 'auto',
    },
  },
  container: {
    textAlign: 'center',
  },
  title: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
  },
  message: {
    fontSize: 20,
  },
}));

ActionNeedToAuthenticate.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default ActionNeedToAuthenticate;
