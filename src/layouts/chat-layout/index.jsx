import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from 'src/components/appbar';
import Sidebar from 'src/components/sidebar';
import DialogConfirmLogout from 'src/components/dialog-confirm-logout';
import Snackbar from 'src/components/snackbar';
import FloatingButtonNewConversation from 'src/containers/conversation/floating-button-new-conversation';
import DialogNewConversation from 'src/containers/conversation/dialog-new-conversation';

const ChatLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <React.Fragment>
      <Snackbar />
      {!isBigScreen && <AppBar />}
      <Sidebar />
      <div className={classes.root}>
        <Outlet />
      </div>
      <FloatingButtonNewConversation />
      <DialogConfirmLogout />
      <DialogNewConversation />
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

export default ChatLayout;
