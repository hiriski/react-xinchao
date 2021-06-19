import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FloatingTab from 'src/components/floating-tab';
import AppBar from 'src/components/appbar';
import Sidebar from 'src/components/sidebar';
import DialogConfirmLogout from 'src/components/dialog-confirm-logout';
import { useSelector } from 'react-redux';
import FloatingButtonAddPhrase from 'src/components/floating-button-add-phrase';
import DialogAddNewPhrase from 'src/containers/phrasebook/dialog-add-new-phrase';
import Snackbar from 'src/components/snackbar';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { user, token } = useSelector((state) => state.authReducer);

  return (
    <React.Fragment>
      <Snackbar />
      {!isBigScreen && <AppBar />}
      <Sidebar />
      <div className={classes.root}>
        <Outlet />
      </div>
      <FloatingTab />
      <DialogConfirmLogout />
      {user !== null && Boolean(token) && (
        <React.Fragment>
          <FloatingButtonAddPhrase />
          <DialogAddNewPhrase />
        </React.Fragment>
      )}
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
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.custom.sidebarWidth,
      paddingTop: 0,
    },
  },
}));

export default MainLayout;
