import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import { transitionStyles, TRANSITION_TIMEOUT } from './transition-styles';
import Snackbar from 'src/components/snackbar';

const AuthLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const { pathname } = useLocation();

  // console.log('isBigScreen', isBigScreen);

  return (
    <TransitionGroup component={null}>
      <ReactTransition
        key={pathname}
        transitionName="auth"
        timeout={{
          enter: TRANSITION_TIMEOUT,
          exit: TRANSITION_TIMEOUT,
        }}
      >
        {(status) => (
          <div className={classes.root} style={{ ...transitionStyles[status] }}>
            <div className={classes.container}>
              <Box className={classes.content}>
                <Outlet />
              </Box>
            </div>
          </div>
        )}
      </ReactTransition>
      <Snackbar />
    </TransitionGroup>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 420,
    },
  },
}));

export default AuthLayout;
