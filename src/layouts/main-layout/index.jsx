import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from 'src/components/appbar';
import Sidebar from 'src/components/sidebar';
import Snackbar from 'src/components/snackbar';

import Box from '@material-ui/core/Box';
import { isAuthSelector } from 'src/modules/auth/selectors';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DialogConfirmLogout from 'src/components/dialog-confirm-logout';
import FloatingButtonAddPhrase from 'src/components/floating-button-add-phrase';
import DialogAddNewPhrase from 'src/containers/phrasebook/dialog-add-new-phrase';
import FooterContainer from 'src/components/footer';

const MainLayout = ({ isAuthenticated }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <React.Fragment>
      <Snackbar />
      {!isBigScreen && <AppBar />}
      <Sidebar />
      <div className={classes.root}>
        <Box display="flex" flex="1" flexDirection="column" component="main">
          <Outlet />
        </Box>
        <FooterContainer />
      </div>
      <DialogConfirmLogout />
      {isAuthenticated && (
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

MainLayout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthSelector(state),
  };
};

export default connect(mapStateToProps)(MainLayout);
