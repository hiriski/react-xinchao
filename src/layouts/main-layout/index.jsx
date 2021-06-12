import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FloatingTab from 'src/containers/floating-tab';
import Container from '@material-ui/core/Container';

import AppBar from 'src/containers/appbar';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <FloatingTab />
        <AppBar />
        <Outlet />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    paddingTop: theme.custom.appBarHeight,
  },
}));

export default MainLayout;
