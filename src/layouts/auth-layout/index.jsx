import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import AuthHeader from 'src/containers/auth/header';

const AuthLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <AuthHeader />
        <Box className={classes.content}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    width: '100%',
    overflow: 'hidden',
    // backgroundImage: `url('/static/images/florian-wehde-lY87gHWdGNo-unsplash.jpg')`,
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
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
    width: 540,
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {},
  },
}));

export default AuthLayout;
