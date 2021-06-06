import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FloatingTab from 'src/containers/floating-tab';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className={classes.root}>
      <FloatingTab />

      <Outlet />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
  },
  container: {
    display: 'flex',
    flex: '1',
    flexDirection: 'co',
  },
}));

export default MainLayout;
