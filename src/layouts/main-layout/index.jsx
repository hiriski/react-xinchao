import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FloatingTab from 'src/components/floating-tab';
import AppBar from 'src/components/appbar';
import Sidebar from 'src/components/sidebar';
import DialogConfirmLogout from 'src/components/dialog-confirm-logout';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <React.Fragment>
      <AppBar />
      <Sidebar />
      <div className={classes.root}>
        <Outlet />
      </div>
      <FloatingTab />
      <DialogConfirmLogout />
    </React.Fragment>
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
